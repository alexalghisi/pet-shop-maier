import { useEffect, useRef, useState } from "react";
import { afterLoadIdle } from "@/lib/idle";
import { ADSTERRA_SANDBOX, bannerConfig, slotDocument } from "@/lib/adsterra";

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNearby(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    // Start watching only once the page is interactive, so ads never delay first paint.
    const cancelIdle = afterLoadIdle(() => {
      if (element) observer.observe(element);
    });
    return () => {
      cancelIdle();
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  const small = viewport !== null && viewport < 400;
  useEffect(() => {
    if (!nearby || viewport === null) return;
    setFilled(false);
    setExpired(false);
    setHeight(0);
    const receive = (event: MessageEvent) => {
      if (
        event.source !== frame.current?.contentWindow ||
        event.data?.type !== "petshop-adsterra-size"
      )
        return;
      const size = event.data.height;
      if (
        event.data.filled === true &&
        typeof size === "number" &&
        Number.isFinite(size) &&
        size > 0
      ) {
        setHeight(Math.min(1600, size));
        setFilled(true);
        setExpired(false);
      } else {
        setFilled(false);
        setHeight(0);
      }
    };
    window.addEventListener("message", receive);
    const timeout = window.setTimeout(() => setExpired(true), 15000);
    return () => {
      window.removeEventListener("message", receive);
      window.clearTimeout(timeout);
    };
  }, [nearby, small, kind, viewport === null]);

  const config = bannerConfig(small ? 399 : 400);
  return (
    <div
      ref={host}
      data-adsterra-slot={kind}
      data-ad-filled={filled}
      className={filled ? "my-6 text-center" : "h-0 overflow-hidden"}
    >
      {filled && <p className="mb-1 text-xs text-muted-foreground">Publicitate</p>}
      {nearby && viewport !== null && (
        <iframe
          ref={frame}
          key={`${kind}-${small}`}
          title={kind === "native" ? "Publicitate Adsterra Native" : "Publicitate Adsterra"}
          sandbox={ADSTERRA_SANDBOX}
          loading="lazy"
          srcDoc={slotDocument(kind, small ? 399 : 400)}
          width={kind === "banner" ? config.width : "100%"}
          height={filled ? height : config.height}
          style={expired && !filled ? { height: 0 } : undefined}
          className="mx-auto block max-w-full border-0"
        />
      )}
    </div>
  );
}
