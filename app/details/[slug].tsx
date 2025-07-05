import { Text, View, StyleSheet } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/src/constants/colors";
import { ImageBackground } from "expo-image";
import { useRouter, useLocalSearchParams } from "expo-router";
import { obtenerNombresDeGeneros } from "@/src/utils/utils";
import { TagCard } from "@/src/screens/components/TagCard";
import { Button } from "@/src/components/Button"; 
import { AudiovisualesContext } from "@/src/context/audiovisual-context";
import { use } from "react";






export default function MediaSlugDetail() {
  const {contenidos,generos,tipos} = use(AudiovisualesContext);
  const { slug } = useLocalSearchParams();
  const media = extraerDatos(slug as string);//obtengo los datos de la serie/pelicula/anime
  const tipoId = media.tipoId //guardo el numero de tipo
  const tipo = extraerTipo(tipoId);//obtengo el nombre del tipo
  const nombreGenero = obtenerNombresDeGeneros(media.generos,generos);//llamo a la funcion que importo para que me devuelva el array con los nombres
  const router = useRouter();


  function extraerTipo(id: number) {
  const nombreTipo = tipos[id - 1].singular;
  return nombreTipo.charAt(0).toUpperCase() + nombreTipo.slice(1);;
}

  function extraerDatos(id: string) {
  const posicionMedia = parseInt(id, 10);  
  return contenidos[posicionMedia - 1];
}


 function handleOnPressButton() {
  return router.back();
}


  return (    
    <View style={style.container}>
      <View style={style.separador}/>
      <Button 
        label= "BACK"
        onPress = {handleOnPressButton}
        icon = {<AntDesign name="arrowleft" size={16} color="white" />} 
      />
    
      

      <View style={style.containerDetails}>
        <ImageBackground style={style.ImageBackground} source={media.imageUrl}/> 
        <TextPressStart2P style={style.titleText}>{media.nombre}</TextPressStart2P>
        <View style={style.generoBanner}>
          <Text style={style.textStyle}>{tipo}</Text>
        </View>
        <Text style={style.textStyle}>{media.descripcion}</Text>

        <View style={style.generoContainer}>
          <TextPressStart2P style={style.generoTitle}>Generos</TextPressStart2P>
          <TagCard generos={nombreGenero}/>
        </View>

      </View>

    </View>

  );
}




const style = StyleSheet.create({
  separador:{
    height:20
  },

  container: {
    flex: 1,
    gap: 10,
    backgroundColor: colors.fondo,
    padding: 10
  },

  ImageBackground: {
    flex: 1,    
    backgroundColor: colors.grisOscuro
  },

  containerDetails: {
    flex: 1,
    borderColor: colors.grisOscuro,
    borderWidth: 4,
    padding: 15,
    gap: 15
  },

  titleText: {
    color: colors.purpura,
    fontSize: 20
  },

  generoBanner: {
    backgroundColor: colors.grisOscuro,
    padding: 4,
    justifyContent: "center",
    alignSelf: "flex-start"
  },
 
  generoContainer: {
    gap: 6
  }, 

  generoTitle: {
    color: colors.verde,
    fontSize: 14
  },

  textStyle:{
    color: colors.blanco
  }

});

