import { View, StyleSheet } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";




export function HomeHeader() {
  return (
    <View style={style.headerContainer}>
      <TextPressStart2P style={style.textTitle}>Pixdex</TextPressStart2P>
      <View style={style.filterButton}>
        <EvilIcons name="gear" size={24} color="white" />
        <TextPressStart2P style={style.textButton}> FILTRAR</TextPressStart2P>
      </View>
    </View>
  );
}








const style = StyleSheet.create({
  headerContainer:{
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems:"center"
   },

  textTitle:{
    fontSize: 24,
    color: colors.purpura,
    fontWeight: "bold"
  },

  filterButton:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.purpura,
    borderWidth: 1,
    padding: 5,
    borderTopColor: colors.purpuraClaro,
    borderLeftColor: colors.purpuraClaro,
    borderBottomColor: colors.purpuraOscuro,
    borderRightColor: colors.purpuraOscuro

  },

  textButton:{
    fontSize:10,
    color: colors.blanco,
    fontWeight: "bold"
  },

});