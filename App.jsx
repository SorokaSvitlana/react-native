import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React from "react";
import RegistrationScreen from "./Screens/RegistrationScreen";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </>
  );
}