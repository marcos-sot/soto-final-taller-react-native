import { View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";


export function HomeHeader(){
    return(
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <TextPressStart2P style={{fontSize:24,color:"#6E59A5",fontWeight:"bold"}}>Pixdex</TextPressStart2P>
                        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#6E59A5",borderWidth:1,padding:5,borderTopColor:"#9B87F5",borderLeftColor:"#9B87F5",borderBottomColor:"#4A3D70",borderRightColor:"#4A3D70"}}>
                        <EvilIcons name="gear" size={24} color="white" />
                        <TextPressStart2P style={{color:"white",fontWeight:"bold"}}> FILTRAR</TextPressStart2P>
                        </View>
        </View>
    );
}