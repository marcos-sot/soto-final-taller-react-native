import { View, StyleSheet,FlatList } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { ContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { MediaCard } from "./MediaCard";

type TContentSectionProps = {
  title: String;
  data: ContenidoAudiovisual[];
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
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", gap: 8 }}>
              <MediaCard 
                nombre={item.nombre}        // Pasamos solo el nombre
                imageUrl={item.imageUrl}   // Pasamos solo la imagen
                generos={item.generos}      // Pasamos solo los géneros
              />
            </View>
          )} 
          keyExtractor={(item) => item.id.toString()}   // Asegúrate de usar una propiedad única
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

  containerTitle: {
    backgroundColor: "#6E59A5",
    borderColor: "#9B87F5",
    borderWidth: 1,
    width: 120,
    marginTop: -18,
    zIndex: 1,
    alignItems: "center"
  },

  titleText: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },


});