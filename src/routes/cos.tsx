import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site";
import { useCart } from "@/lib/cart";
import { formatPrice, mediaUrl, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/cos")({
  head: () => ({
    meta: [
      { title: "Coșul tău – PetShop Maier Gilău" },
      { name: "description", content: "Produsele din coșul tău de la PetShop Maier Gilău." },
      { property: "og:title", content: "Coșul tău – PetShop Maier" },
      { property: "og:description", content: "Produsele din coșul tău de la PetShop Maier Gilău." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const cart = useCart();
  const order = `Bună! Aș dori să comand:\n${cart.items.map((i) => `• ${i.qty} x ${i.name} (${formatPrice(i.price)})`).join("\n")}\nTotal: ${formatPrice(cart.total)}`;
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl">Coșul tău</h1>
        {cart.items.length === 0 ? (
          <p className="mt-8 text-muted-foreground">Coșul e gol. <Link to="/produse" className="text-primary underline">Vezi produsele</Link></p>
        ) : (
          <>
            <ul className="mt-8 divide-y rounded-xl border">
              {cart.items.map((i) => (
                <li key={i.id} className="flex items-center gap-4 p-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">{i.image && <img src={mediaUrl(i.image)} alt="" className="h-full w-full object-cover" />}</div>
                  <Link to="/produse/$slug" params={{ slug: i.slug }} className="flex-1 font-semibold hover:text-primary">{i.name}</Link>
                  <div className="flex items-center rounded-lg border">
                    <button className="px-2 py-1" onClick={() => cart.setQty(i.id, i.qty - 1)}>−</button>
                    <span className="w-8 text-center">{i.qty}</span>
                    <button className="px-2 py-1" onClick={() => cart.setQty(i.id, i.qty + 1)}>+</button>
                  </div>
                  <span className="w-24 text-right font-bold">{formatPrice(i.qty * i.price)}</span>
                  <button aria-label="Șterge" onClick={() => cart.remove(i.id)} className="text-muted-foreground hover:text-destructive">✕</button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col items-end gap-4">
              <p className="text-2xl">Total: <strong className="text-primary">{formatPrice(cart.total)}</strong></p>
              <button disabled className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground opacity-50 sm:w-auto" title="Plata cu cardul va fi activată în curând">
                Plătește cu cardul (în curând)
              </button>
              <a href={whatsappLink(order)} target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-accent px-6 py-3 text-center font-semibold text-accent-foreground hover:opacity-90 sm:w-auto">
                Trimite comanda pe WhatsApp
              </a>
            </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
