import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomNav from "./nav/BottomNav";
import { AppRegistry } from 'react-native';
import Cart from "./screens/Cart";
import ProductDel from "./screens/ProductDel";
import { LoginPage } from "./screens";
import {SingUp} from "./screens";

AppRegistry.registerComponent('Monito', () => App);

const Stack = createNativeStackNavigator();

export default function App() {
  const [allFonts] = useFonts({
    regular: require("./assets/font/Gilroy-Regular.ttf"),
    light: require("./assets/font/Gilroy-Light.ttf"),
    medium: require("./assets/font/Gilroy-Medium.ttf"),
    semiBold: require("./assets/font/Gilroy-SemiBold.ttf"),
    bold: require("./assets/font/Gilroy-Bold.ttf"),
    extraBold: require("./assets/font/Gilroy-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (allFonts) {
      await SplashScreen.hideAsync();
    }
  }, [allFonts]);

  if (!allFonts) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom nav'
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ProductDel'
          component={ProductDel}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name='Login'
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SingUp'
          component={SingUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'regular', // Enclose font family name in quotes
    fontSize: 20
  }
});

