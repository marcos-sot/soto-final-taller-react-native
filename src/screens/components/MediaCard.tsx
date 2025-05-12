import { View,StyleSheet} from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { ImageBackground } from "expo-image";
import { TagCard } from "./TagCard";


type TMediaCardProp = {  
  nombre: string;  
  generos: string[]; 
  imageUrl: string;
}



export function MediaCard({nombre,generos,imageUrl}:TMediaCardProp) {
  return (

    <View style={style.card}>
      <ImageBackground style={style.ImageBackground} source={{uri:imageUrl}}></ImageBackground>
      <View style={style.containerInfo}>
        <TextPressStart2P style={style.titleText}>{nombre}</TextPressStart2P>
        <TagCard generos={generos} />
      </View>
    </View>
  );

}

const style = StyleSheet.create ({
  card:{
    width:180,
    height:400,
    borderWidth: 2,
    borderBottomColor: colors.purpuraClaro,
    borderRightColor: colors.purpuraClaro,
    borderLeftColor: colors.purpuraOscuro,
    borderTopColor: colors.purpuraOscuro,    
  },

  ImageBackground:{
    height:280,   
    backgroundColor: colors.grisOscuro
  },

  containerInfo :{
    gap: 14,
    padding: 10
  },

titleText:{
  fontSize: 10,
  fontWeight: "bold",
  color: colors.blanco,  
},


});