import { Stack } from "expo-router";
import { AudiovisualesContextProvider } from "@/src/context/audiovisual-context";

export default function RootLayout() {
  return( 
    <AudiovisualesContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="/details" options={{ headerShown: false }} />
      </Stack>
    </AudiovisualesContextProvider>
)};
