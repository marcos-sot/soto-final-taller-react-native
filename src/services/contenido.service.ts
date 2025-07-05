import { API_URL } from "../constants/env";
import { ContenidoAudiovisual } from "../data/contenidosAudiovisuales";

export async function getContenidos(): Promise<ContenidoAudiovisual[]> {
  const responseContenidos = await fetch(`${API_URL}/contenidos`);
  if (!responseContenidos.ok) {
    throw new Error("Error al obtener contenidos");
  }
  const contenidos: ContenidoAudiovisual[] = await responseContenidos.json();
  return contenidos;
}

