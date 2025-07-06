

import { View, Text, StyleSheet } from "react-native";
import { Button } from "@/src/components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@/src/constants/colors";
import { useRouter } from "expo-router";

type Props = {
  vidas: number;
  puntaje: number;
  nombreJugador: string;  
};

const router = useRouter();

 function handleOnPressButton() {
        return router.push("/");
    }

export function HeaderJuego({ vidas, puntaje, nombreJugador }: Props) {
  return (
    <View style={style.bannerContainer}>
      <Button
        label="EXIT"
        onPress={handleOnPressButton}
        icon={<AntDesign name="arrowleft" size={16} color="white" />}
      />

      <View style={style.corazonContainer}>
        {Array.from({ length: vidas }).map((_, index) => (
          <AntDesign
            key={index}
            name="heart"
            size={16}
            color={colors.purpuraOscuro}
          />
        ))}
      </View>

      <View>
        <Text style={style.fontStyle}>Player: {nombreJugador}</Text>
        <Text style={style.fontStyle}>Score: {puntaje}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
 fontStyle:{
        color:colors.blanco,
        fontSize:10,
    },

    bannerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },

    corazonContainer:{
        flexDirection:"row",
        gap:4,
    },
});
