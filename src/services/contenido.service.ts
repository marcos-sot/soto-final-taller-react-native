import { API_URL } from "../constants/env";
import { ContenidoAudiovisual } from "../data/contenidosAudiovisuales";

export async function obtenerContenidosPorTipo(tipoId: number): Promise<ContenidoAudiovisual[]> {
  try {
    const response = await fetch(`${API_URL}/contenidos?tipoId=${tipoId}`);

    if (!response.ok) {
      throw new Error("Error al obtener contenidos por tipo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener contenidos:", error);
    throw error;
  }
}
