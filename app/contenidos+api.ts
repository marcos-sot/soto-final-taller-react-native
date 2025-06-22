// contenidos+api.ts

import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";

export function GET(request: Request) {
  const url = new URL(request.url);
  const tipoId = url.searchParams.get("tipoId");

  // Si hay tipoId, filtramos
  if (tipoId) {
    const filtrados = contenidosAudiovisuales.filter(
      (contenido) => contenido.tipoId === Number(tipoId)
    );
    return Response.json(filtrados);
  }

  // Si no hay tipoId, devolvemos todo
  return Response.json(contenidosAudiovisuales);
}
