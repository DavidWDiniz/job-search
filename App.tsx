import "react-native-gesture-handler";
import React from 'react';
import {useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from "styled-components/native";
import theme from "./src/styles/theme";
import {Home} from "./src/screens/Home";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
