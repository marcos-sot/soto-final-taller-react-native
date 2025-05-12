import { View, Pressable, StyleSheet } from "react-native";
import { TextPressStart2P } from "./TextPressStart2P";
import { colors } from "../constants/colors";

type TButtonProp = {
  label: string;
  onPress: () => void;
  icon: React.ReactNode;
}


export function Button({ label, onPress, icon }: TButtonProp) {
  return <Pressable onPress={onPress}>
    <View style={style.button}>
      {icon}
      <TextPressStart2P style={style.textButton}>{label}</TextPressStart2P>
    </View>
  </Pressable>
}






const style = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.purpura,
    gap: 4,
    padding: 10,
    alignSelf: "flex-start",
    alignItems: "center"
  },

  textButton: {
    color: colors.blanco,
    fontWeight: "bold",
    fontSize: 12
  },

});