import { View,StyleSheet } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { generosContenidoAudiovisual } from "@/src/data/generosContenidoAudiovisual";

type TMediaCardProp = {  
  nombre: string;  
  generos: number[]; 
  imageUrl: string;
}



export function MediaCard({nombre,generos,imageUrl}:TMediaCardProp) {
  return (

    <View style={style.card}>
      <View style={{ height: 170, backgroundColor: "#403E43" }}>imagen</View>
      <View style={style.containerInfo}>
        <TextPressStart2P style={style.titleText}>{nombre}</TextPressStart2P>
        <View style={style.containerGeneros}>
          <View style={style.cardGenero}>
            <TextPressStart2P style={style.generoText}>Action</TextPressStart2P>
          </View>
          <View style={style.cardGenero}>
            <TextPressStart2P style={style.generoText}>Adventure</TextPressStart2P>
          </View>
        </View>
      </View>
    </View>
  );

}

const style = StyleSheet.create ({
  card:{flex: 1,
    borderWidth: 2,
    borderBottomColor: colors.purpuraClaro,
    borderRightColor: colors.purpuraClaro,
    borderLeftColor: colors.purpuraOscuro,
    borderTopColor: colors.purpuraOscuro,
    marginRight:8
  },

  containerInfo :{gap: 4,
    padding: 10
  },

titleText:{fontSize: 6,
  fontWeight: "bold",
  color: colors.blanco
},

containerGeneros:{flexDirection: "row",
  gap: 4
},

cardGenero:{backgroundColor: colors.grisOscuro,
  padding: 5,
  alignItems: "center"
},

generoText:{
  fontSize: 4,
  fontWeight: "bold",
  color: colors.blanco
},






});