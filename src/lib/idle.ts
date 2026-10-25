/**
 * Runs `cb` once the page has finished loading and the main thread is idle,
 * so third-party scripts (ads) never compete with the first render.
 * Returns a cancel function.
 */
export function afterLoadIdle(cb: () => void, timeout = 3000): () => void {
  if (typeof window === "undefined") return () => {};
  let cancelled = false;
  let idleId: number | undefined;
  let timerId: number | undefined;
  const run = () => {
    if (cancelled) return;
    const w = window as Window & {
      requestIdleCallback?: (fn: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) idleId = w.requestIdleCallback(() => !cancelled && cb(), { timeout });
    else timerId = window.setTimeout(() => !cancelled && cb(), 1);
  };
  const onLoad = () => {
    // Small delay after `load` so hydration work and LCP settle first.
    timerId = window.setTimeout(run, 500);
  };
  if (document.readyState === "complete") onLoad();
  else window.addEventListener("load", onLoad, { once: true });
  return () => {
    cancelled = true;
    window.removeEventListener("load", onLoad);
    if (timerId !== undefined) window.clearTimeout(timerId);
    const w = window as Window & { cancelIdleCallback?: (id: number) => void };
    if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
  };
}

export function loadScriptOnce(id: string, src: string, attrs: Record<string, string> = {}) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  s.src = src;
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  document.head.appendChild(s);
}
