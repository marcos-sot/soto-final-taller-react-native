import { View, StyleSheet,FlatList } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { ContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { MediaCard } from "./MediaCard";
import { Link } from "expo-router";
import { obtenerNombresDeGeneros } from "@/src/utils/utils";
import { AudiovisualesContext } from "@/src/context/audiovisual-context";
import { use } from "react";


type TContentSectionProps = {
  title: String;
  data: ContenidoAudiovisual[];
}



export function ContentSection({ title, data }: TContentSectionProps) {
  const {generos} = use(AudiovisualesContext); 
  
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
            const listaNombres = obtenerNombresDeGeneros(item.generos,generos);            
            return (
              <Link 
              href={{
                pathname: '/details/[slug]', 
                params: { 
                  slug: item.id.toString() }, 
              }}
        
                      
            
              >             
                <MediaCard 
                  nombre={item.nombre}
                  imageUrl={item.imageUrl}
                  generos={listaNombres}  
                />
              </Link>               
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
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",    
  },


});