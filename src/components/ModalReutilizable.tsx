import React, { ReactNode } from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface ModalReutilizableProps {
  visible: boolean;
  onModalClose: () => void;
  children: ReactNode;
  contentStyle?: ViewStyle; 
  overlayStyle?: ViewStyle; 
}

export default function ModalReutilizable({
  visible,
  onModalClose,
  children,
  contentStyle,
  overlayStyle,
}: ModalReutilizableProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onModalClose}>
        <View style={[styles.overlay, overlayStyle]}>
          <TouchableWithoutFeedback>
            <View style={[styles.content, contentStyle]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    height: 500,
    padding: 10,
    backgroundColor: "white", // podés sobreescribir esto desde afuera
    borderRadius: 8,
  },
});
