import { Text, View, StyleSheet, Pressable } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/src/constants/colors";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams, Link } from "expo-router";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import { tiposContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import { obtenerNombresDeGeneros } from "@/src/screens/components/ContentSection";




function extraerDatos(id: string) {
  const posicionMedia = parseInt(id, 10);
  // lo hago de esta manera con find como soluciono el tema de la posibilidad del null
  return contenidosAudiovisuales[posicionMedia - 1];
}

function extraerTipo(id: number) {
  const nombreTipo = tiposContenidoAudiovisual[id - 1].singular;
  return nombreTipo.charAt(0).toUpperCase() + nombreTipo.slice(1);;
}


export default function MediaSlugDetail() {
  const { slug } = useLocalSearchParams();

  const media = extraerDatos(slug as string);//obtengo los datos de la serie/pelicula/anime
  const tipoId = media.tipoId //guardo el numero de tipo
  const tipo = extraerTipo(tipoId);//obtengo el nombre del tipo
  const nombreGenero = obtenerNombresDeGeneros(media.generos);//llamo a la funcion que importo para que me devuelva el array con los nombres


  return (
    <View style={style.container}>
      <Link href={"/"}>
        <View style={style.backButton}>
          <AntDesign name="arrowleft" size={16} color="white" />
          <TextPressStart2P style={style.textButton}>BACK</TextPressStart2P>
        </View>
      </Link>

      <View style={style.containerDetails}>
        <ImageBackground style={style.ImageBackground} source={media?.imageUrl}> </ImageBackground>
        <TextPressStart2P style={style.titleText}>{media.nombre}</TextPressStart2P>
        <View style={style.generoBanner}>
          <Text style={style.generoText}>{tipo}</Text>
        </View>
        <Text style={style.generoText}>{media.descripcion}</Text>

        <View style={style.generoContainer}>
          <TextPressStart2P style={style.generoTitle}>Generos</TextPressStart2P>
          <View style={style.generosContainerItem}>
            {nombreGenero.map((nombre, index) => (
              <View key={index} style={style.generoBanner}>
                <Text style={style.generoText}>{nombre}</Text>
              </View>
            ))}
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

  generosContainerItem: {
    flexDirection: "row",
    gap:8  
  },

  generoTitle: {
    color: colors.verde,
    fontSize: 14
  }

});

