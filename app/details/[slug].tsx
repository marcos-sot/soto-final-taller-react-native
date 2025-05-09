import { Text, View, StyleSheet, Pressable } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/src/constants/colors";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams,useRouter } from "expo-router";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import { tiposContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import { obtenerNombresDeGeneros } from "@/src/screens/components/ContentSection";




function extraerDatos (id: string){
    return contenidosAudiovisuales.find(item => item.id === +id);
}

function extraerTipo(id: number){
    const tipo =tiposContenidoAudiovisual.find(item => item.id === +id)
    return tipo?.singular
}


export default function MediaSlugDetail() {  
    const {slug} = useLocalSearchParams(); 
        
    const router = useRouter(); 
    const handleBackPress = () => {
        router.back();  
    };
    const media = extraerDatos(slug as string);
    const tipoId = media?.tipoId
    const tipo = tipoId ? extraerTipo(tipoId) : null;
    


  return (
    <View style={style.container}>
      <Pressable style={style.backButton} onPress={handleBackPress}>
        <AntDesign name="arrowleft" size={16} color="white" />
        <TextPressStart2P style={style.textButton}>BACK</TextPressStart2P>
      </Pressable>

      <View style={style.containerDetails}>
        <ImageBackground style={style.ImageBackground} source={media?.imageUrl}> </ImageBackground>
        <TextPressStart2P style={style.titleText}>{media?.nombre}</TextPressStart2P>
        <View style={style.generoBanner}>
          <Text style={style.generoText}>{tipo}</Text>
        </View>
        <Text style={style.generoText}>{media?.descripcion}</Text>

        <View style={style.generoContainer}>
          <TextPressStart2P style={style.generoTitle}>Generos</TextPressStart2P>
         
          <View style={style.generoBanner}>
            <Text style={style.generoText}>Drama</Text>
          </View>
          
        </View>

      </View>

    </View>

  );
}


const style = StyleSheet.create({
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

  backButton: {
    flexDirection: "row",
    backgroundColor: colors.purpura,
    gap: 4,
    padding: 10,
    alignSelf: "flex-start",
    alignItems: "center",
    marginTop: 20
  },

  textButton: {
    color: colors.blanco,
    fontWeight: "bold",
    fontSize: 12
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

  generoText: {
    color: colors.blanco
  },

  generoContainer: {
    gap: 6
  },

  generoTitle: {
    color: colors.verde,
    fontSize: 14
  }

});

