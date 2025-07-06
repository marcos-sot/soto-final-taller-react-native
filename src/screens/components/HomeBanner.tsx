import { View, Text,StyleSheet,Pressable } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { useRouter } from "expo-router";



export function HomeBanner() {
  const router = useRouter();
  return (
    <View style={style.bannerContainer}>
      <Pressable onPress={() => router.push("/ahorcado")} style={style.card}>
        <View style={style.textContainer}>
          <TextPressStart2P style={style.textTitle}>Desafío del Ahorcado</TextPressStart2P>
          <Text style={style.textDescription}>Adivina los títulos letra por letra. ¿Cuántos puedes identificar?</Text>
        </View>
        <TextPressStart2P style={style.textPlay}>Jugar</TextPressStart2P>
      </Pressable>   
    


      <View style={[style.card,{backgroundColor:colors.verde}]}>
        <View style={style.textContainer}>
          <TextPressStart2P style={style.textTitle}>Pixel Reveal</TextPressStart2P>
          <Text style={style.textDescription}>Identifica títulos desde imágenes pixeladas.¡Pon a prueba tu memoria visual!</Text>
        </View>
        <TextPressStart2P style={style.textPlay}>Jugar</TextPressStart2P>
      </View>
    </View>

  );
}


const style = StyleSheet.create({
  bannerContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8
  },


  card:{
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.purpura,
    borderWidth: 4,
    borderColor: colors.purpuraOscuro,
    gap: 4,
    padding: 10
  },

  textContainer:{
    gap:6
  },

  textTitle:{
    fontSize: 14,
    fontWeight: "bold",
    color: colors.blanco
  },

  textDescription:{
    fontSize: 12,
    color: colors.blanco
  },

  textPlay:{
    color: colors.blanco,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 10
  },


});