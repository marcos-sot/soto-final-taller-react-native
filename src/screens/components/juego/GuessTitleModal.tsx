import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet,Pressable } from "react-native";
import ModalReutilizable from "@/src/components/ModalReutilizable";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { Button } from "@/src/components/Button";
import { colors } from "@/src/constants/colors";
import { Entypo } from "@expo/vector-icons";

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmitGuess: (title: string) => void;
};

export default function GuessTitleModal({ visible, onClose, onSubmitGuess }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit() {
    onSubmitGuess(title);
    setTitle(""); 
    onClose();
  }

  return (
    <ModalReutilizable visible={visible} onModalClose={onClose} contentStyle={{ height:220 }}>
      <View style={styles.separatorContent}>
        <View style={styles.closeStyle}>
            <Pressable onPress={onClose}>
            <Entypo name="cross" size={18} color="white" />
            </Pressable>
        </View>
        <View style={styles.inputStyle}>
          <TextPressStart2P style={styles.textTitle}>Guess the Title</TextPressStart2P>         
       

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter complete title"
              placeholderTextColor="#888"
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button label="SUBMIT GUESS" onPress={handleSubmit} borderColor={colors.verde}/>
        </View>
       </View>
      </View>
    </ModalReutilizable>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: colors.purpuraClaro,
    
  },
  input: {
    padding: 10,
    fontSize: 14,
    fontFamily: "PressStart2P-Regular",
    color: colors.blanco,
  },

  separatorContent:{
    gap: 10
  },

  closeStyle:{
    alignSelf: "flex-end"
  },

  inputStyle:{
    gap: 20
  },

  textTitle:{
    fontSize: 16,
    color:colors.blanco
  },

  buttonContainer:{
    alignSelf:"flex-end"
  }
});
