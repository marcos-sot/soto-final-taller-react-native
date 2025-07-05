import { View, StyleSheet } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FilterModal } from "./FilterModal";




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
      <View>
        <Button
          label="FILTER"
          onPress={mostrarModal}
          icon={<EvilIcons name="gear" size={24} color="white" />}
        />
        <FilterModal visible={isModalVisible} onClose={ocultarModal} />
      </View>      
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


