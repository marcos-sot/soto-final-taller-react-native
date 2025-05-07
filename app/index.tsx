import { Text, View} from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P"; // o la ruta que uses
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/src/constants/colors";
/*
import { HomeScreen } from "@/src/screens/HomeScreen";
export default HomeScreen;
*/




export default function Index() {
  return (
    <View style={{flex:1,gap:10, backgroundColor:colors.fondo,padding:10}}>
      <View style={{flexDirection:"row",backgroundColor:colors.purpura, gap:4,padding:10, alignSelf:"flex-start",marginTop:20}}>
        <AntDesign name="arrowleft" size={14} color="white" />
        <TextPressStart2P style={{color:colors.blanco, fontWeight:"bold",fontSize:12}}>BACK</TextPressStart2P>
      </View>



    <View style={{flex:1,borderColor:colors.grisOscuro,borderWidth:4,padding:15,gap:10}}>
      <View style={{flex:1,backgroundColor:colors.grisOscuro}}>
        Imagen
      </View>
      <TextPressStart2P style={{backgroundColor:colors.purpura, fontSize:20}}>Stranger Things</TextPressStart2P>
      <View style={{backgroundColor:colors.grisOscuro,padding:5}}>
        <Text>Tv</Text>
      </View>
      <Text style={{color:colors.blanco}}>EStes esa las dasinvofirgskndfoasdc, siod sdovnsdv  iodflsdnv nasdiovsldkv nsdofknsald</Text>

      <View>
        <TextPressStart2P style={{color:colors.verde, fontSize:14}}>Generos</TextPressStart2P>
        <View>
          <Text>Drama</Text>
        </View>
      </View>

      
    
    
    
    </View>  

  </View>



    
  );
}
