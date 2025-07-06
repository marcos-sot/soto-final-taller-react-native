import { useState,use } from "react";
import { View, Pressable,ScrollView,StyleSheet } from "react-native";
import { Button } from "@/src/components/Button";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import ModalReutilizable from "@/src/components/ModalReutilizable";
import MyCheckbox from "@/src/components/MyCheckBox";
import { AudiovisualesContext } from "@/src/context/audiovisual-context";
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from "@/src/constants/colors";


type FilterModalProps = {
  visible: boolean;
  onClose: () => void; // Esta es la función que cierra el modal
}




export function FilterModal({ visible, onClose }: FilterModalProps) {
  const { tipos, generos, contenidos, setContenidosFiltrados } = use(AudiovisualesContext);
  const [tiposSeleccionados, setTiposSeleccionados] = useState<number[]>([]);
  const [generosSeleccionados, setGenerosSeleccionados] = useState<number[]>([]);

  function mayuscula(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

  function aplicarFiltros() {
    let filtrados = contenidos.filter(
      (c) => tiposSeleccionados.length === 0 || tiposSeleccionados.includes(c.tipoId)
    );
    filtrados = filtrados.filter(
      (c) => generosSeleccionados.length === 0 || c.generos.some((g) => generosSeleccionados.includes(g))
    );
    setContenidosFiltrados(filtrados);
    onClose();
  }




  return (
    <ModalReutilizable visible={visible} onModalClose={onClose}>
      <ScrollView>
          <View style={style.closeStyle}>
            <Pressable onPress={onClose}>
              <Entypo name="cross" size={18} color="white" />
            </Pressable>
          </View>

          <View style={style.container}>
            <View style={style.separatorContent}>
              <TextPressStart2P style={style.textTitle}>
                Filter Content
              </TextPressStart2P>

              <View style={style.sectionSeparator}>
                <TextPressStart2P style={style.textSection}>
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

              <View style={style.sectionSeparator}>
                <TextPressStart2P style={style.textSection}>
                  Géneros
                </TextPressStart2P>
                <View style={style.generosSection}>
                  {(generos ?? []).map((genero) => (
                    <View key={genero.id} style={style.containerCheckbox}>
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
            <View style={style.separador}></View>      
            <View style={style.buttonContainer}>
              <Button
                label="CANCEL"
                onPress={onClose}
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
  );
}



const style = StyleSheet.create ({
  closeStyle:{
    alignSelf: "flex-end"
  },
  
  container:{
    justifyContent: "space-between",
    flex: 1,
    padding:8,
  },

  separatorContent:{
    gap: 30 
  },

  textTitle:{
    color: colors.blanco, 
    fontSize: 18
  },

  sectionSeparator:{
    gap:10
  },

  textSection:{
    color: colors.verde, 
    fontSize: 16
  },

  generosSection:{
    flexDirection: "row", 
    flexWrap: "wrap", 
    gap: 10
  },

  separador:{
    height:30
  },

  buttonContainer:{
    flexDirection: "row", 
    gap: 8, 
    alignSelf: "flex-end"
  },

  containerCheckbox:{
    width: "48%"
  }



});