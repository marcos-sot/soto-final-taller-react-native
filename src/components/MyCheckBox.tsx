import { View, Text,Pressable,StyleSheet } from 'react-native';
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
      style={style.presableStyle}
    >
      <View style={[ style.checkBoxStyle, { backgroundColor: value ? colors.purpuraClaro : colors.fondo }]}>
        {value && (
          <Entypo name="check" size={14} color="white" />
        )}
      </View>
      <Text style={{ color: 'white', marginLeft: 8 }}>{label}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create ({
  checkBoxStyle:{
    width: 16,
    height: 16,    
    borderColor: colors.purpuraClaro,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  presableStyle:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 4
  }
});
