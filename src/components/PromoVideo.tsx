import { useEffect, useRef, useState } from "react";
import { SITE_URL } from "@/lib/products";

export const PROMO_VIDEO = {
  src: "/video/pet-shop-maier-prezentare.mp4",
  poster: "/video/pet-shop-maier-prezentare.jpg",
  name: "PET SHOP MAIER Gilău – prezentarea magazinului de furaje și pet shop",
  description:
    "Prezentarea PET SHOP MAIER din Gilău, jud. Cluj: furaje la sac (tărâțe 40 lei/20 kg, furaj combinat 60 lei/30 kg), Furaje MAN, hrană pentru câini, pisici și cai, pui și ouă Brahma de rasă, calculator de furaje și comenzi pe WhatsApp.",
  duration: "PT60S",
  uploadDate: "2026-10-25",
};

export const promoVideoLd = () => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: PROMO_VIDEO.name,
  description: PROMO_VIDEO.description,
  thumbnailUrl: [`${SITE_URL}${PROMO_VIDEO.poster}`],
  contentUrl: `${SITE_URL}${PROMO_VIDEO.src}`,
  uploadDate: PROMO_VIDEO.uploadDate,
  duration: PROMO_VIDEO.duration,
  inLanguage: "ro-RO",
  publisher: { "@id": `${SITE_URL}/#store` },
});

/**
 * Prezentare video: pornește singură (fără sunet, cum cer browserele) când
 * ajunge în ecran și se oprește când iese; vizitatorul poate porni sunetul.
 */
export function PromoVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  // Nimic din video (nici poster, nici fișierul mp4) nu se descarcă până nu se apropie de ecran.
  const [near, setNear] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const nearIo = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setNear(true);
          nearIo.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    const playIo = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.5 },
    );
    nearIo.observe(v);
    playIo.observe(v);
    return () => {
      nearIo.disconnect();
      playIo.disconnect();
    };
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!near || !v) return;
    // Sursa a fost tocmai atașată: dacă video-ul e deja vizibil, pornește-l.
    const r = v.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) v.play().catch(() => {});
  }, [near]);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) v.play().catch(() => {});
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16" aria-labelledby="prezentare-video">
      <p className="eyebrow">Prezentare video</p>
      <h2 id="prezentare-video" className="mt-2 text-3xl md:text-4xl">
        Cunoaște PET SHOP MAIER în 60 de secunde
      </h2>
      <div className="relative mt-6 overflow-hidden rounded-3xl bg-black shadow-xl ring-1 ring-border">
        <video
          ref={ref}
          src={near ? PROMO_VIDEO.src : undefined}
          poster={near ? PROMO_VIDEO.poster : undefined}
          width={960}
          height={540}
          muted
          playsInline
          loop
          preload={near ? "metadata" : "none"}
          controls
          className="aspect-video w-full"
          aria-label={PROMO_VIDEO.name}
        />
        <button
          type="button"
          onClick={toggleSound}
          className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-black/85"
        >
          {muted ? "🔊 Pornește sunetul" : "🔇 Oprește sunetul"}
        </button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{PROMO_VIDEO.description}</p>
    </section>
  );
}
