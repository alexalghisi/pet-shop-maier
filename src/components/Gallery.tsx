import { useCallback, useEffect, useState } from "react";
import { photoSrc, photoSrcSet, type GalleryPhoto } from "@/lib/gallery";

/** Galerie masonry: fiecare poză apare întreagă (fără crop), cu lightbox la click. */
export function Gallery({
  photos,
  columns = "columns-2 sm:columns-3 lg:columns-4",
}: {
  photos: GalleryPhoto[];
  columns?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  const cur = open !== null ? photos[open] : null;

  return (
    <>
      <div className={`${columns} gap-4 [column-fill:_balance]`}>
        {photos.map((p, i) => (
          <figure key={p.slug} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-2xl bg-muted shadow-sm ring-1 ring-border transition hover:shadow-xl focus-visible:outline-2 focus-visible:outline-primary"
              aria-label={`Mărește: ${p.alt}`}
            >
              <img
                src={photoSrc(p.slug, true)}
                srcSet={photoSrcSet(p.slug)}
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </figure>
        ))}
      </div>

      {cur && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={cur.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <img
            src={photoSrc(cur.slug)}
            alt={cur.alt}
            width={cur.w}
            height={cur.h}
            className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute inset-x-0 bottom-4 px-16 text-center text-sm text-white/85">
            {cur.alt}
          </p>
          <button
            type="button"
            aria-label="Închide"
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25"
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Poza anterioară"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Poza următoare"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-3xl text-white hover:bg-white/25"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
