import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = { id: string; slug: string; name: string; price: number; image?: string | undefined; qty: number };
type Ctx = {
  items: CartItem[];
  add: (i: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  total: number;
};
const CartContext = createContext<Ctx | null>(null);
const KEY = "petshop-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem(KEY) || "[]"));
    } catch {}
  }, []);
  const save = (next: CartItem[]) => {
    setItems(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };
  const value: Ctx = {
    items,
    add: (i, qty = 1) => {
      const ex = items.find((x) => x.id === i.id);
      save(ex ? items.map((x) => (x.id === i.id ? { ...x, qty: x.qty + qty } : x)) : [...items, { ...i, qty }]);
    },
    setQty: (id, qty) => save(items.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x))),
    remove: (id) => save(items.filter((x) => x.id !== id)),
    clear: () => save([]),
    count: items.reduce((s, x) => s + x.qty, 0),
    total: items.reduce((s, x) => s + x.qty * x.price, 0),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
