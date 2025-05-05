import { View,Text } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";


export function HomeBanner(){
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",gap:8}}>        
            <View style={{flex:1,justifyContent:"space-between",backgroundColor:"#6E59A5",borderWidth:4,borderColor:"#4A3D70",gap:4,padding:10}}>
                <View style={{gap:6}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>Desafío del Ahorcado</TextPressStart2P>
                <Text style={{fontSize:10,color:"white"}}>Adivina los títulos letra por letra. ¿Cuántos puedes identificar?</Text> 
                </View>  
                <TextPressStart2P style={{color:"white",textAlign:"right",fontWeight:"bold",fontSize:8}}>Jugar</TextPressStart2P>  
            </View>
                
            

            <View style={{flex:1,justifyContent:"space-between", backgroundColor:"#5FD068",borderWidth:4,borderColor:"#4A3D70",padding:10, gap:2}}>
            <View style={{gap:6}}>
            <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>Pixel Reveal</TextPressStart2P>
            <Text style={{fontSize:10,color:"white"}}>Identifica títulos desde imágenes pixeladas.¡Pon a prueba tu memoria visual!</Text>
            </View>
            <TextPressStart2P style={{color:"white",textAlign:"right",fontWeight:"bold",fontSize:8}}>Jugar</TextPressStart2P> 
            </View>
        </View>
                    
    );
}