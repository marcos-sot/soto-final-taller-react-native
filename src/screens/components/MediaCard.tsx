import { View,StyleSheet,Text } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { ImageBackground } from "expo-image";


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
        <View style={style.containerGeneros}>
          {generos.map((nombre,index) => (
            <View key={index} style={style.cardGenero}>              
              <TextPressStart2P style={style.generoText}>{nombre}</TextPressStart2P>              
            </View>
            ))}          
        </View>
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

containerGeneros:{
  flexDirection: "row",
  flexWrap: "wrap",   
  gap: 4
},

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






});