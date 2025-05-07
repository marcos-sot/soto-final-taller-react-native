import { View, StyleSheet,FlatList } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { ContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { generosContenidoAudiovisual } from "@/src/data/generosContenidoAudiovisual";
import { MediaCard } from "./MediaCard";

type TContentSectionProps = {
  title: String;
  data: ContenidoAudiovisual[];
}


function obtenerNombresDeGeneros(listaGeneros: number[]): string[] {
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


export function ContentSection({ title, data }: TContentSectionProps) {
  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <TextPressStart2P style={style.titleText}>
          {title.toUpperCase()}
        </TextPressStart2P>
      </View>

      
        <FlatList 
          data={data}          
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const listaNombres = obtenerNombresDeGeneros(item.generos);
          
            return (              
                <MediaCard 
                  nombre={item.nombre}
                  imageUrl={item.imageUrl}
                  generos={listaNombres}  
                />              
            );
          }}        
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.contentSeparator}
          horizontal
          
        />   
   
    </View>
  );
}











const style = StyleSheet.create({
  container: {
    borderColor: "#403E43",
    borderWidth: 4,
    gap: 10,
    padding: 10
  },

  contentSeparator:{        
    gap:10
  },

  containerTitle: {
    backgroundColor: "#6E59A5",
    borderColor: "#9B87F5",
    borderWidth: 1,  
    marginTop: -24,
    zIndex: 1,
    padding:6,
    alignItems: "center",   
    alignSelf:"flex-start" 
  },

  titleText: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",    
  },


});