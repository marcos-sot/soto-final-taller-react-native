import { IGeneroContenidoAudiovisual } from "../data/generosContenidoAudiovisual";


export function obtenerNombresDeGeneros(listaGeneros: number[],generos:IGeneroContenidoAudiovisual[]): string[] {
  if (!generos || generos.length === 0) {
    return []; // aún no cargaron los géneros
  }
  return listaGeneros
    .map((id) => {
      const genero = generos.find((g) => g.id === id);
      if (!genero) return '';
      const nombre = genero.nombre;
      return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    })
    .filter(Boolean);
}





