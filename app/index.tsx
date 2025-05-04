import { Text, View, ScrollView,FlatList } from "react-native";

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
      
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:24,color:"#6E59A5",fontWeight:"bold"}}>Pixdex</Text>
        <View style={{flexDirection:"row",backgroundColor:"#6E59A5",borderWidth:1,padding:5,borderTopColor:"#9B87F5",borderLeftColor:"#9B87F5",borderBottomColor:"#4A3D70",borderRightColor:"#4A3D70"}}>
          <Text style={{color:"white",fontWeight:"bold"}}>ICO</Text>
          <Text style={{color:"white",fontWeight:"bold"}}> FILTRAR</Text>
        </View>
      </View>

      <View style={{flexDirection:"row",justifyContent:"space-between",gap:6}}>        
          <View style={{flex:1,justifyContent:"space-between",backgroundColor:"#6E59A5",borderWidth:4,borderColor:"#4A3D70",gap:2,padding:10}}>
            <View>
              <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>Desafío del Ahorcado</Text>
              <Text style={{fontSize:6,color:"white"}}>Adivina los títulos letra por letra. ¿Cuántos puedes identificar?</Text> 
            </View>  
            <Text style={{color:"white",textAlign:"right",fontWeight:"bold",fontSize:8}}>Jugar</Text>  
          </View>
             
        

        <View style={{flex:1,justifyContent:"space-between", backgroundColor:"#5FD068",borderWidth:4,borderColor:"#4A3D70",padding:10, gap:2}}>
        <View>
          <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>Pixel Reveal</Text>
          <Text style={{fontSize:6,color:"white"}}>Identifica títulos desde imágenes pixeladas.¡Pon a prueba tu memoria visual!</Text>
        </View>
        <Text style={{color:"white",textAlign:"right",fontWeight:"bold",fontSize:8}}>Jugar</Text> 
        </View>
      </View>
      
      <ScrollView style={{flex:1}} contentContainerStyle={{gap:20,paddingVertical: 15}}>

        <View style={{borderColor:"#403E43", borderWidth:4,gap:10,padding:10}}>
          <View style={{backgroundColor:"#6E59A5", borderColor:"#9B87F5",borderWidth:1,width:70,marginTop:-20,zIndex:1,alignItems:"center"}}>
            <Text style={{fontSize:12,color:"white",fontWeight:"bold",textAlign:"center"}}>SERIES</Text>
          </View> 

          
          
          <View style={{flexDirection:"row",gap:8}}>
            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>StrangerThings</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>Breaking Bad</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>The Office</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

          </View>  



          
        </View>


        <View style={{ borderColor:"#403E43", borderWidth:4,gap:10,padding:10}}>
          <View style={{backgroundColor:"#6E59A5", borderColor:"#9B87F5",borderWidth:1,width:70,marginTop:-20,zIndex:1,alignItems:"center"}}>
            <Text style={{fontSize:12,color:"white",fontWeight:"bold"}}>PELICULAS</Text>
          </View>      
          <View style={{flexDirection:"row",gap:8}}>
            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>StrangerThings</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>Breaking Bad</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>The Office</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

          </View>


        </View>




        <View style={{borderColor:"#403E43", borderWidth:4,gap:10,padding:10}}>
          <View style={{backgroundColor:"#6E59A5", borderColor:"#9B87F5",borderWidth:1,width:70,marginTop:-20,zIndex:1,alignItems:"center"}}>
            <Text style={{fontSize:12,color:"white",fontWeight:"bold",textAlign:"center"}}>ANIME</Text>
          </View>   
          <View style={{flexDirection:"row",gap:8}}>
            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>StrangerThings</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>Breaking Bad</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex:1,borderWidth:2,borderBottomColor:"#9B87F5", borderRightColor:"#9B87F5", borderLeftColor:"#4A3D70",borderTopColor:"#4A3D70"}}>
              <View style={{height:170,backgroundColor:"#403E43"}}>imagen </View>
              <View style={{gap:2,padding:10}}>
                <Text style={{fontSize:12,fontWeight:"bold",color:"white"}}>The Office</Text>
                <View style={{flexDirection:"row", gap:4}}>
                  <View style={{backgroundColor:"#403E43", padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Action</Text>
                  </View>
                  <View style={{backgroundColor:"#403E43",padding:5,alignItems:"center"}}>
                    <Text style={{fontSize:5,fontWeight:"bold",color:"white"}}>Adventure</Text>  
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
