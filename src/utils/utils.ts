import { generosContenidoAudiovisual } from "../data/generosContenidoAudiovisual";

export function obtenerNombresDeGeneros(listaGeneros: number[]): string[] {
  return listaGeneros.map((id) => {
    for (let i = 0; i < generosContenidoAudiovisual.length; i++) {
      if (generosContenidoAudiovisual[i].id === id) {
        const nombre = generosContenidoAudiovisual[i].nombre;
        return nombre.charAt(0).toUpperCase() + nombre.slice(1);
      }
    }
    return '';
  });
}