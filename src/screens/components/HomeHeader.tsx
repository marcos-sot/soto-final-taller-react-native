import { View, StyleSheet, Pressable,ScrollView } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { colors } from "@/src/constants/colors";
import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useState,ReactNode,use } from "react";
import MyCheckbox from "@/src/components/MyCheckBox";
import Entypo from '@expo/vector-icons/Entypo';
import ModalReutilizable from "@/src/components/ModalReutilizable";
import { AudiovisualesContext } from "@/src/context/audiovisual-context";
import { ContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
const router = useRouter();




export function HomeHeader() {
  const [isModalVisible,setModalVisible] = useState <boolean> (false);  
  const { tipos, generos,contenidos,setContenidosFiltrados } = use(AudiovisualesContext);
  const [tiposSeleccionados, setTiposSeleccionados] = useState<number[]>([]);
  const [generosSeleccionados, setGenerosSeleccionados] = useState<number[]>([]);
  

  function mostrarModal(){
    setModalVisible(true);
  }

  function ocultarModal(){
    setModalVisible(false);
  }

 function mayuscula(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

  // Lógica para aplicar filtros
  function aplicarFiltros() {
    // Filtrar por tipos
    let filtrados = contenidos.filter((contenido) =>
      tiposSeleccionados.length === 0 || tiposSeleccionados.includes(contenido.tipoId)
    );

    // Filtrar por géneros
    filtrados = filtrados.filter((contenido) =>
      generosSeleccionados.length === 0 || contenido.generos.some((genero) =>
        generosSeleccionados.includes(genero)
      )
    );

    // Actualizar contenidos filtrados (esto dependerá de cómo gestionas el estado global)
    setContenidosFiltrados(filtrados);

    // Cerrar el modal
    ocultarModal();
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
        <ScrollView>
          <View style={{ alignSelf: "flex-end" }}>
            <Pressable onPress={ocultarModal}>
              <Entypo name="cross" size={18} color="white" />
            </Pressable>
          </View>

          <View style={{ justifyContent: "space-between", flex: 1,padding:8 }}>
            <View style={{ gap: 30 }}>
              <TextPressStart2P style={{ color: colors.blanco, fontSize: 18 }}>
                Filter Content
              </TextPressStart2P>

              <View style={{ gap: 10 }}>
                <TextPressStart2P style={{ color: colors.verde, fontSize: 16 }}>
                  Content Types
                </TextPressStart2P>
                {(tipos ?? []).map((tipo) => (
                  <MyCheckbox
                    key={tipo.id}
                    label={mayuscula(tipo.plural)}
                    value={tiposSeleccionados.includes(tipo.id)}
                    onChange={(checked) => {
                      if (checked) {
                        setTiposSeleccionados([...tiposSeleccionados, tipo.id]);
                      } else {
                        setTiposSeleccionados(tiposSeleccionados.filter((id) => id !== tipo.id));
                      }
                    }}
                  />
                ))}
              </View>

              <View style={{ gap: 10 }}>
                <TextPressStart2P style={{ color: colors.verde, fontSize: 16 }}>
                  Géneros
                </TextPressStart2P>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                  {(generos ?? []).map((genero) => (
                    <View key={genero.id} style={{ width: '48%' }}>
                      <MyCheckbox
                        label={mayuscula(genero.nombre)}
                        value={generosSeleccionados.includes(genero.id)}
                        onChange={(checked) => {
                          if (checked) {
                            setGenerosSeleccionados([...generosSeleccionados, genero.id]);
                          } else {
                            setGenerosSeleccionados(generosSeleccionados.filter((id) => id !== genero.id));
                          }
                        }}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={{height:30}}></View>      
            <View style={{ flexDirection: "row", gap: 8, alignSelf: "flex-end" }}>
              <Button
                label="CANCEL"
                onPress={ocultarModal}
                backgroundColor={colors.fondo}
                borderColor={colors.grisOscuro}
              />
              <Button
                label="APPLY FILTERS"
                onPress={aplicarFiltros}
                borderColor={colors.verde}
              />
            </View>
          </View>
          </ScrollView>  
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


