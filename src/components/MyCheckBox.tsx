import { Checkbox } from 'expo-checkbox';
import { View, Text,Pressable } from 'react-native';
import { colors } from '../constants/colors';
import { Entypo } from '@expo/vector-icons';


type TMyCheckBoxProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export default function MyCheckbox({ label, value, onChange }: TMyCheckBoxProps) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: value ? colors.purpuraClaro : colors.fondo,
          borderColor: colors.purpuraClaro,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {value && (
          <Entypo name="check" size={14} color="white" />
        )}
      </View>
      <Text style={{ color: 'white', marginLeft: 8 }}>{label}</Text>
    </Pressable>
  );
}
