import { Text, View, ScrollView,FlatList } from "react-native";
import { TextPressStart2P } from "@/src/components/TextPressStart2P"; // o la ruta que uses
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,        
        //alignItems: "center",
        backgroundColor: "#1A1F2C",
        padding:8,
        gap:20,
      }}
    >
      <View style={{height:4}}></View> 
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <TextPressStart2P style={{fontSize:24,color:"#6E59A5",fontWeight:"bold"}}>Pixdex</TextPressStart2P>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#6E59A5",borderWidth:1,padding:5,borderTopColor:"#9B87F5",borderLeftColor:"#9B87F5",borderBottomColor:"#4A3D70",borderRightColor:"#4A3D70"}}>
          <EvilIcons name="gear" size={24} color="white" />
          <TextPressStart2P style={{color:"white",fontWeight:"bold"}}> FILTRAR</TextPressStart2P>
        </View>
      </View>

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
      
      <ScrollView style={{flex:1}} contentContainerStyle={{gap:20,paddingVertical: 15}}>

        <View style={{borderColor:"#403E43", borderWidth:4,gap:10,padding:10}}>
          <View style={{backgroundColor:"#6E59A5", borderColor:"#9B87F5",borderWidth:1,width:70,marginTop:-20,zIndex:1,alignItems:"center"}}>
            <TextPressStart2P style={{fontSize:8,color:"white",fontWeight:"bold",textAlign:"center"}}>SERIES</TextPressStart2P>
          </View> 

          
          
          <View style={{flexDirection:"row",gap:8}}>
            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}></View>
              <View style={{gap:4,padding:10}}>
                <TextPressStart2P style={{fontSize:6,fontWeight:"bold",color:"white"}}>StrangerThings</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:4,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:4,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}> </View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>Breaking Bad</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}></View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>The Office</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

          </View>  



          
        </View>


        <View style={{ borderColor:"#403E43", borderWidth:4,gap:10,padding:10}}>
          <View style={{backgroundColor:"#6E59A5", borderColor:"#9B87F5",borderWidth:1,width:120,marginTop:-18,zIndex:1,alignItems:"center"}}>
            <TextPressStart2P style={{fontSize:12,color:"white",fontWeight:"bold"}}>PELICULAS</TextPressStart2P>
          </View>      
          <View style={{flexDirection:"row",gap:8}}>
            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}></View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>StrangerThings</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}></View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>Breaking Bad</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}> </View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>The Office</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

          </View>


        </View>




        <View style={{borderColor:"#403E43", borderWidth:4,gap:10,padding:10}}>
          <View style={{backgroundColor:"#6E59A5", borderColor:"#9B87F5",borderWidth:1,width:70,marginTop:-20,zIndex:1,alignItems:"center"}}>
            <TextPressStart2P style={{fontSize:11,color:"white",fontWeight:"bold",textAlign:"center"}}>ANIME</TextPressStart2P>
          </View>   
          <View style={{flexDirection:"row",gap:8}}>
            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}></View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>StrangerThings</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}></View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>Breaking Bad</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}> </View>
              <View style={{gap:2,padding:10}}>
                <TextPressStart2P style={{fontSize:12,fontWeight:"bold",color:"white"}}>The Office</TextPressStart2P>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</TextPressStart2P>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <TextPressStart2P style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</TextPressStart2P>  
                  </View>
                </View>
              </View>
            </View>

          </View>


        </View>


    </ScrollView>
     







      
    </View>
  );
}
