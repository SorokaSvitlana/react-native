import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { useState } from "react";
import Home from "./Screens/Home";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";
import AppContext from "./Screens/Components/AppContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

const MainStack = createStackNavigator();

export default function App() {
  const [params, setParams] = useState(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext.Provider value={{ params, setParams }}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <MainStack.Navigator
              initialRouteName="Login"
              screenOptions={{
                headerShown: false,
              }}
            >
              <MainStack.Screen
                name="Registration"
                component={RegistrationScreen}
              />
              <MainStack.Screen name="Login" component={LoginScreen} />
              <MainStack.Screen name="Home" component={Home} />
              <MainStack.Screen name="Comments" component={CommentsScreen} />
              <MainStack.Screen name="Map" component={MapScreen} />
            </MainStack.Navigator>
          </NavigationContainer>
        </AppContext.Provider>
      </PersistGate>
    </Provider>
  );
}