import { createMiddleware } from "@tanstack/react-start";

// Same behaviour as integrations/supabase/auth-attacher, but the Supabase SDK is
// imported on demand so it stays out of the initial bundle of every public page.
export const attachSupabaseAuthLazy = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },
);
