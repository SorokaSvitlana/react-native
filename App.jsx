import React from "react";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf").default,
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf").default,
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf").default,
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
