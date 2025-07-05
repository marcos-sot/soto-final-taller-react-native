import { API_URL } from "../constants/env";
import { IGeneroContenidoAudiovisual } from "../data/generosContenidoAudiovisual";

export async function getGeneros(): Promise<IGeneroContenidoAudiovisual[]> {
  const responseGeneros = await fetch(`${API_URL}/generos`);
  if (!responseGeneros.ok) {
    throw new Error("Error al obtener contenidos");
  }
  const generos: IGeneroContenidoAudiovisual[] = await responseGeneros.json();
  return generos;
}