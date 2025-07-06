import { ScrollView, StyleSheet } from "react-native";
import { useEffect, use } from "react";
import { ContentSection } from "./ContentSection";
import { getContenidos } from "@/src/services/contenido.service";
import { getTipos } from "@/src/services/tipo.service";
import { getGeneros } from "@/src/services/genero.service";
import { AudiovisualesContext } from "@/src/context/audiovisual-context";





export function ContentCategories() {
  const { tipos, setTipos,setGeneros,contenidos,setContenidos,isLoaded, setIsLoaded,contenidosFiltrados,setContenidosFiltrados } = use(AudiovisualesContext);

  useEffect(() => {
  if (!isLoaded) {
    cargarDatos();
  }
}, []);

async function cargarDatos() {
  try {
    const [contenidosRes, tiposRes, generosRes] = await Promise.all([
      getContenidos(),
      getTipos(),
      getGeneros(),
    ]);
    setContenidos(contenidosRes);
    setTipos(tiposRes);
    setGeneros(generosRes);
    setIsLoaded(true);
  } catch (error) {
    console.log("Error al cargar datos", error);
    alert("Fallo la carga de datos");
  }
}



  useEffect(() => {    
    if (contenidosFiltrados.length === 0 && contenidos.length > 0) {
      setContenidosFiltrados(contenidos); // se setean los contenidos a lo contenidos filtrados la prmera vez
    }
  }, [contenidos]);
  


 const info = tipos.flatMap(tipo => {
  const contenidosDelTipo = contenidosFiltrados.filter(
    (contenido) => contenido.tipoId === tipo.id
  );
  return contenidosDelTipo.length > 0
    ? [{ nombre: tipo.singular, contenidos: contenidosDelTipo }]
    : [];
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
