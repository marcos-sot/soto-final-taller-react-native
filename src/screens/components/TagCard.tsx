import { View,StyleSheet } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";

type TTagCardProp={
  generos : string[];
}


export function TagCard({generos}:TTagCardProp) {
  console.log("TAG CARG",generos)
  return (
    <View style={style.containerGeneros}>
    {generos.map((nombre, index) => (
        <View key={index} style={style.cardGenero}>
          <TextPressStart2P style={style.generoText}>{nombre}</TextPressStart2P>
        </View>
      ))
    }
  </View>
  )
};  



const style = StyleSheet.create({
  cardGenero:{
    backgroundColor: colors.grisOscuro,
    padding: 5,
    alignItems: "center"
  },
  
  generoText:{
    fontSize: 9,
    fontWeight: "bold",
    color: colors.blanco
  },

  containerGeneros:{
  flexDirection: "row",
  flexWrap: "wrap",   
  gap: 4
},
});