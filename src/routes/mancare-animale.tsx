import { createFileRoute, redirect } from "@tanstack/react-router";

/** /mancare-animale → pagina principală de hrană pentru animale (301). */
export const Route = createFileRoute("/mancare-animale")({
  beforeLoad: () => {
    throw redirect({ to: "/hrana-animale", statusCode: 301 });
  },
});
