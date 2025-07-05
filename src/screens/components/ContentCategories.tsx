import { ScrollView, StyleSheet } from "react-native";
import { useEffect, use } from "react";
import { ContentSection } from "./ContentSection";
import { getContenidos } from "@/src/services/contenido.service";
import { getTipos } from "@/src/services/tipo.service";
import { getGeneros } from "@/src/services/genero.service";
import { AudiovisualesContext } from "@/src/context/audiovisual-context";





export function ContentCategories() {
  const { tipos, setTipos, generos,setGeneros,contenidos,setContenidos,isLoaded, setIsLoaded,contenidosFiltrados,setContenidosFiltrados } = use(AudiovisualesContext);

  useEffect(() => {
    if (!isLoaded){
      obtenerContenidos();
      obtenerTipos();
      obtenerGeneros();
    }
  }, []);


  useEffect(() => {
    // Solo asignar contenidosFiltrados si no hay filtros aplicados y los contenidos ya han sido cargados
    if (contenidosFiltrados.length === 0 && contenidos.length > 0) {
      setContenidosFiltrados(contenidos); 
    }
  }, [contenidos]);




  async function obtenerTipos() {   
    try {
      const data = await getTipos();
      setTipos(data);
    } catch (error) {
      alert(`FALLO ${error}`);
      console.log("ERROR", error);
    } 
  }

  async function obtenerContenidos() {   
    try {
      const data = await getContenidos();
      setContenidos(data);
    } catch (error) {
      alert(`FALLO ${error}`);
      console.log("ERROR", error);
    } 
  }

    async function obtenerGeneros() {   
    try {
      const data = await getGeneros();
      setGeneros(data);
    } catch (error) {
      alert(`FALLO ${error}`);
      console.log("ERROR", error);
    } 
  }


  const info = (tipos ?? []).map((tipo) => {
  const contenidosDelTipo = contenidosFiltrados.filter(
    (contenido) => contenido.tipoId === tipo.id
  );

  return {
    nombre: tipo.singular,
    contenidos: contenidosDelTipo,
  };
});



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




const style = StyleSheet.create({
  container: {
    gap: 20,
    paddingVertical: 15
  },

});
