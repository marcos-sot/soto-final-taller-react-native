import { Text, View, StyleSheet } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/src/constants/colors";
import { ImageBackground } from "expo-image";

export default function MediaDetail() {
  return (
    <View style={style.container}>
      <View style={style.backButton}>
        <AntDesign name="arrowleft" size={16} color="white" />
        <TextPressStart2P style={style.textButton}>BACK</TextPressStart2P>
      </View>

      <View style={style.containerDetails}>
        <ImageBackground style={style.ImageBackground}> </ImageBackground>
        <TextPressStart2P style={style.titleText}>Stranger Things</TextPressStart2P>
        <View style={style.generoBanner}>
          <Text style={style.generoText}>Tv</Text>
        </View>
        <Text style={style.generoText}>EStes esa las dasinvofirgskndfoasdc, siod sdovnsdv  iodflsdnv nasdiovs</Text>

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

