import { useEffect, useRef } from "react";

const PL = "https://pl31755070.profitableratecpmnetwork.com";

declare global {
  interface Window {
    atOptions?: Record<string, unknown>;
  }
}

export function AdBanner({ adKey, width, height, className }: { adKey: string; width: number; height: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const conf = document.createElement("script");
    conf.text = `atOptions = { 'key': '${adKey}', 'format': 'iframe', 'height': ${height}, 'width': ${width}, 'params': {} };`;
    const invoke = document.createElement("script");
    invoke.src = `${PL}/${adKey}/invoke.js`;
    el.appendChild(conf);
    el.appendChild(invoke);
  }, [adKey, width, height]);
  return (
    <div className={className} aria-label="Reclamă">
      <div ref={ref} style={{ width, height, maxWidth: "100%" }} className="mx-auto overflow-hidden" />
    </div>
  );
}

export function NativeBanner({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    const s = document.createElement("script");
    s.async = true;
    s.dataset["cfasync"] = "false";
    s.src = `${PL}/295af5bb4bb21bdbb9a3dd1905d16419/invoke.js`;
    const box = document.createElement("div");
    box.id = "container-295af5bb4bb21bdbb9a3dd1905d16419";
    el.appendChild(s);
    el.appendChild(box);
  }, []);
  return <div ref={ref} className={className} aria-label="Reclamă" />;
}

export function SocialBar() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://pl31755072.profitableratecpmnetwork.com/67/2f/b3/672fb36d446ac9312b9cab5919848f4d.js";
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);
  return null;
}
