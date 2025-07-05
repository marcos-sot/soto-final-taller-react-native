import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import ModalReutilizable from "@/src/components/ModalReutilizable";
import { TextPressStart2P } from '@/src/components/TextPressStart2P';
import { Button } from "@/src/components/Button";
import { colors } from "@/src/constants/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
  message: string;
  buttonLabel: string;
};

export function GameStatusModal({
  visible,
  onClose,
  message,
  buttonLabel,
}: Props) {
  return (
    <ModalReutilizable visible={visible} onModalClose={onClose} contentStyle={{ backgroundColor: colors.fondo, height: 200 }}>
      <View style={{ gap: 40, alignItems: "center",padding:10 }}>
        <TextPressStart2P style={{ fontSize: 18, color: colors.blanco, textAlign: "center" }}>
          {message}
        </TextPressStart2P>
        <Pressable onPress={onClose}>
          <Button label={buttonLabel} onPress={onClose} borderColor={colors.verde} />
        </Pressable>
      </View>
    </ModalReutilizable>
  );
}


