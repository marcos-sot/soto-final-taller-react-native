import { API_URL } from "../constants/env";
import { ITipoContenidoAudiovisual } from "../data/tiposContenidoAudiovisual";



export async function getTipos(): Promise<ITipoContenidoAudiovisual[]> {
  const responseTipos = await fetch(`${API_URL}/tipos`);
  if (!responseTipos.ok) {
    throw new Error("Error al obtener tipos");
  }
  const tipos: ITipoContenidoAudiovisual[] = await responseTipos.json(); 

  return tipos;
}


