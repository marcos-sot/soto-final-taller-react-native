import { ScrollView, StyleSheet } from "react-native";
import { useEffect,useState } from "react";
import { ContentSection } from "./ContentSection";
import { ContenidoAudiovisual, contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import { ITipoContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import { obtenerTipos } from "@/src/services/tipo.service";
import { obtenerContenidosPorTipo } from "@/src/services/contenido.service";



export function ContentCategories() {
  const [info, setInfo] = useState<
    { nombre: string; contenidos: ContenidoAudiovisual[] }[]
  >([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const tipos = await obtenerTipos();

        const resultados: {
          nombre: string;
          contenidos: ContenidoAudiovisual[];
        }[] = [];

        for (const tipo of tipos) {
          const contenidos = await obtenerContenidosPorTipo(tipo.id);
          resultados.push({
            nombre: tipo.singular,
            contenidos: contenidos,
          });
        }

        setInfo(resultados);
      } catch (error) {
        console.error("Fallo al cargar datos", error);
      }
    };

    cargarDatos();
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}
    >
      {info.map((item) => (
        <ContentSection
          key={item.nombre}
          title={item.nombre}
          data={item.contenidos}
        />
      ))}
    </ScrollView>
  );
}


/*
function filtrarPorTipos(tipoId: Number) {
  return contenidosAudiovisuales.filter((contenido) => contenido.tipoId === tipoId)
}

const series = filtrarPorTipos(1);
const peliculas = filtrarPorTipos(2);
const anime = filtrarPorTipos(3);

export function ContentCategories() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={style.container} showsVerticalScrollIndicator={false}>
      <ContentSection title="Series" data={series} />
      <ContentSection title="Peliculas" data={peliculas} />
      <ContentSection title="Anime" data={anime} />
    </ScrollView>

  );
}
*/

const style = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 15
  },

});
