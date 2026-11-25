import type { ReactNode } from "react";
import { Header, Footer, Breadcrumbs } from "@/components/site";

export const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-primary underline"
  >
    {children}
  </a>
);

export const Section = ({ h, children }: { h: string; children: ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl">{h}</h2>
    <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

export const Li = ({ children }: { children: ReactNode }) => (
  <li className="border-l-4 border-gold pl-4">{children}</li>
);

/** Shared layout of the trust and legal pages: header band, article, footer. */
export function InfoPage(props: {
  crumb: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <Header />
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <Breadcrumbs items={[{ name: props.crumb }]} />
          <p className="eyebrow mt-6">{props.eyebrow}</p>
          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{props.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{props.intro}</p>
          {props.updated && (
            <p className="mt-4 text-sm font-semibold">Ultima actualizare: {props.updated}</p>
          )}
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-6 py-14 md:py-16">{props.children}</article>
      <Footer />
    </main>
  );
}
