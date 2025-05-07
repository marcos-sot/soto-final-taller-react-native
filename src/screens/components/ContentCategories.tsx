import { ScrollView, StyleSheet } from "react-native";
import { ContentSection } from "./ContentSection";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";



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


const style = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 15
  },

});
