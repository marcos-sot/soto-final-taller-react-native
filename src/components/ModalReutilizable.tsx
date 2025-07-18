import React, { ReactNode } from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colors } from "../constants/colors";

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
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ width: "100%", alignItems: "center" }}
            >
              <View style={[styles.content, contentStyle]}>
                {children}
              </View>
            </KeyboardAvoidingView>
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
    backgroundColor: colors.fondo,
    borderColor: colors.grisOscuro,
    borderWidth: 2,
    borderRadius: 2,
  },
});
