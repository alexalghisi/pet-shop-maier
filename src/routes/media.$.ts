import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media/$")({
  server: {
    handlers: {
      GET: async ({ params, request }) => {
        const path = params._splat ?? "";
        if (!path || path.includes("..")) return new Response("Not found", { status: 404 });
        // Serve repeat requests from the edge cache instead of downloading from storage each time.
        const edge = (globalThis as { caches?: { default?: Cache } }).caches?.default;
        const cacheKey = new Request(new URL(request.url).toString(), { method: "GET" });
        if (edge) {
          const hit = await edge.match(cacheKey).catch(() => undefined);
          if (hit) return hit;
        }
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data, error } = await supabaseAdmin.storage.from("product-media").download(path);
        if (error || !data) return new Response("Not found", { status: 404 });
        const response = new Response(data, {
          headers: {
            "Content-Type": data.type || "application/octet-stream",
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
        if (edge) await edge.put(cacheKey, response.clone()).catch(() => {});
        return response;
      },
    },
  },
});
