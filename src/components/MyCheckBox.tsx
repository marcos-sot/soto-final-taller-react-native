import { Checkbox } from 'expo-checkbox';
import { View, Text } from 'react-native';


type TMyCheckBoxProps = {
  label: string;
  value: boolean;
  
};

export default function MyCheckbox({ label, value }: TMyCheckBoxProps) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
      <Checkbox
        value={value}       
        color={value ? '#A259FF' : undefined}
        style={{
          width: 18,
          height: 18,
          borderColor: '#A259FF',
          borderWidth: 1,
          backgroundColor: value ? '#A259FF' : 'transparent',
        }}
      />
      <Text style={{ color: 'white', marginLeft: 8 }}>{label}</Text>
    </View>
  );
}
