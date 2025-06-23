import { View, StyleSheet,Modal,TouchableWithoutFeedback } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState,ReactNode } from "react";

const router = useRouter();




export function HomeHeader() {
  const [isModalVisible,setModalVisible] = useState <boolean> (false);

  function mostrarModal(){
    setModalVisible(true);
  }

  function ocultarModal(){
    setModalVisible(false);
  }

 

  return (
    <View style={style.headerContainer}>
      <TextPressStart2P style={style.textTitle}>Pixdex</TextPressStart2P>
      <Button
        label="FILTER"
        onPress={mostrarModal}
        icon={<EvilIcons name="gear" size={24} color="white" />}
      />

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: "rgba(0,0,0,0.7)"}}>
          <View style={{padding:10,backgroundColor:colors.fondo,width: "80%",height: 500,}}>            
            <View style={{justifyContent:"space-between",flex:1}}>
              <View style={{gap:30}}>
                <TextPressStart2P style={{color:colors.blanco, fontSize:18}}> Filter Content</TextPressStart2P>
                <View>
                  <TextPressStart2P style={{color:colors.verde,fontSize:16}}> Content Type</TextPressStart2P>
                  <View>
                    ITEMS DE CONTENIDO
                  </View>
                </View>
                <View>
                  <TextPressStart2P style={{color:colors.verde,fontSize:16}}> Generos</TextPressStart2P>
                  <View>
                    TODOS LOS GENEROS
                  </View>
                </View>
              </View> 
              <View style={{flexDirection:"row",gap:8}}>
                <Button label="CANCEL" onPress={ocultarModal} icon={<EvilIcons name="gear" size={24} color="white" />}></Button>
                <Button label="APPLY FILTERS" onPress={mostrarModal} icon={<EvilIcons name="gear" size={24} color="white" />}></Button>
              </View>
            </View> 
          </View>
        </View>
      </Modal>


    </View>

   




  );
  
}





const style = StyleSheet.create({
  headerContainer:{
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems:"center"
   },

  textTitle:{
    fontSize: 24,
    color: colors.purpura,
    fontWeight: "bold"
  },

  filterButton:{
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.purpura,
    borderWidth: 1,
    padding: 5,
    borderTopColor: colors.purpuraClaro,
    borderLeftColor: colors.purpuraClaro,
    borderBottomColor: colors.purpuraOscuro,
    borderRightColor: colors.purpuraOscuro

  },

  textButton:{
    fontSize:10,
    color: colors.blanco,
    fontWeight: "bold"
  },

});


