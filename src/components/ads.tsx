import { useEffect, useRef, useState } from "react";
import { ADSTERRA_SANDBOX, SOCIAL_BAR_URL, bannerConfig, slotDocument } from "@/lib/adsterra";

export function AdsterraSlot({ kind = "banner" }: { kind?: "banner" | "native" }) {
  const host = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [viewport, setViewport] = useState<number | null>(null);
  const [nearby, setNearby] = useState(false);
  const [height, setHeight] = useState(0);
  const [filled, setFilled] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const resize = () => setViewport(window.innerWidth);
    resize();
    window.addEventListener("resize", resize);
    const element = host.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setNearby(true); observer.disconnect(); }
    }, { rootMargin: "200px" });
    if (element) observer.observe(element);
    return () => { window.removeEventListener("resize", resize); observer.disconnect(); };
  }, []);

  const small = viewport !== null && viewport < 400;
  useEffect(() => {
    if (!nearby || viewport === null) return;
    setFilled(false);
    setExpired(false);
    setHeight(0);
    const receive = (event: MessageEvent) => {
      if (event.source !== frame.current?.contentWindow || event.data?.type !== "petshop-adsterra-size") return;
      const size = event.data.height;
      if (event.data.filled === true && typeof size === "number" && Number.isFinite(size) && size > 0) {
        setHeight(Math.min(1600, size));
        setFilled(true);
        setExpired(false);
      } else { setFilled(false); setHeight(0); }
    };
    window.addEventListener("message", receive);
    const timeout = window.setTimeout(() => setExpired(true), 15000);
    return () => { window.removeEventListener("message", receive); window.clearTimeout(timeout); };
  }, [nearby, small, kind, viewport === null]);

  const config = bannerConfig(small ? 399 : 400);
  return (
    <div ref={host} data-adsterra-slot={kind} data-ad-filled={filled} className={filled ? "my-6 text-center" : "h-0 overflow-hidden"}>
      {filled && <p className="mb-1 text-xs text-muted-foreground">Publicitate</p>}
      {nearby && viewport !== null && (
        <iframe ref={frame} key={`${kind}-${small}`} title={kind === "native" ? "Publicitate Adsterra Native" : "Publicitate Adsterra"}
          sandbox={ADSTERRA_SANDBOX} loading="lazy" srcDoc={slotDocument(kind, small ? 399 : 400)}
          width={kind === "banner" ? config.width : "100%"} height={filled ? height : config.height}
          style={expired && !filled ? { height: 0 } : undefined}
          className="mx-auto block max-w-full border-0" />
      )}
    </div>
  );
}

export function SocialBar() {
  useEffect(() => {
    if (!document.getElementById("adsterra-social-bar")) {
      const script = document.createElement("script");
      script.id = "adsterra-social-bar";
      script.dataset.cfasync = "false";
      script.src = SOCIAL_BAR_URL;
      document.body.appendChild(script);
    }
    // Keep WhatsApp clear of fixed overlays inserted by the advertising network.
    let scheduled = 0;
    const avoidOverlap = () => {
      scheduled = 0;
      const whatsapp = document.querySelector<HTMLElement>('[aria-label="Scrie-ne pe WhatsApp"]');
      if (!whatsapp) return;
      whatsapp.style.bottom = "20px";
      const rect = whatsapp.getBoundingClientRect();
      let bottom = 20;
      for (const element of document.body.querySelectorAll<HTMLElement>("*")) {
        if (element === whatsapp || element.contains(whatsapp) || whatsapp.contains(element) || element.closest("header")) continue;
        const position = getComputedStyle(element).position;
        if (position !== "fixed") continue;
        const box = element.getBoundingClientRect();
        if (box.width > 0 && box.height > 0 && box.left < rect.right && box.right > rect.left && box.bottom > rect.top && box.top < rect.bottom) {
          bottom = Math.max(bottom, window.innerHeight - box.top + 16);
        }
      }
      whatsapp.style.bottom = `${Math.min(window.innerHeight - 80, bottom)}px`;
    };
    const schedule = () => { if (!scheduled) scheduled = requestAnimationFrame(avoidOverlap); };
    const observer = new MutationObserver((records) => {
      if (records.some(record => !(record.target instanceof Element && record.target.matches('[aria-label="Scrie-ne pe WhatsApp"]')))) schedule();
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"] });
    window.addEventListener("resize", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    schedule();
    return () => { observer.disconnect(); cancelAnimationFrame(scheduled); window.removeEventListener("resize", schedule); window.removeEventListener("scroll", schedule); };
  }, []);
  return null;
}
