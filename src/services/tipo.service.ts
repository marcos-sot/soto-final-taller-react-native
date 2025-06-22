import { API_URL } from "../constants/env";
import { ITipoContenidoAudiovisual } from "../data/tiposContenidoAudiovisual";

export async function obtenerTipos(): Promise<ITipoContenidoAudiovisual[]> {
    try {
        const response = await fetch(`${API_URL}/tipos`);
        if (!response.ok) {
            throw new Error("Error al obtener los tipos")
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener tipos:', error);
        throw error; // Lanzamos el error para que el componente lo maneje 
    }

}