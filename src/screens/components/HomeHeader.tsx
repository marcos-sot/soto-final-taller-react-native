import { View, StyleSheet,Modal,TouchableOpacity, Pressable } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState,ReactNode } from "react";
import MyCheckbox from "@/src/components/MyCheckBox";
import Entypo from '@expo/vector-icons/Entypo';
import ModalReutilizable from "@/src/components/ModalReutilizable";
const router = useRouter();




export function HomeHeader() {
  const [isModalVisible,setModalVisible] = useState <boolean> (false);
  const [checked, setChecked] = useState(false);

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

      

        <ModalReutilizable
          visible={isModalVisible}
          onModalClose={ocultarModal}
          contentStyle={{ backgroundColor: colors.fondo }} // si querés mantener tu estilo
        >
          <View style={{ alignSelf: "flex-end" }}>
            <Pressable onPress={ocultarModal}>
              <Entypo name="cross" size={24} color="white" />
            </Pressable>
          </View>

          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <View style={{ gap: 30 }}>
              <TextPressStart2P style={{ color: colors.blanco, fontSize: 18 }}>
                Filter Content
              </TextPressStart2P>

              <View style={{ gap: 10 }}>
                <TextPressStart2P style={{ color: colors.verde, fontSize: 16 }}>
                  Content Type
                </TextPressStart2P>
                <MyCheckbox label="TV Shows" value={true} />
              </View>

              <View style={{ gap: 10 }}>
                <TextPressStart2P style={{ color: colors.verde, fontSize: 16 }}>
                  Géneros
                </TextPressStart2P>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 16 }}>
                  <MyCheckbox label="Drama" value={true} />
                </View>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 8, alignSelf: "flex-end" }}>
              <Button
                label="CANCEL"
                onPress={ocultarModal}
                backgroundColor={colors.fondo}
                borderColor={colors.grisOscuro}
              />
              <Button
                label="APPLY FILTERS"
                onPress={mostrarModal}
                borderColor={colors.verde}
              />
            </View>
          </View>
        </ModalReutilizable>



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


