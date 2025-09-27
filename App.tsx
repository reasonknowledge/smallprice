import { StatusBar } from "expo-status-bar";
// import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "./screens/Menu";
import Accueil from "./smallprice/Accueil";
import SignUp from "./screens/SignUp";
import Bon from "./smallprice/Bon";
import Monmenu from "./smallprice/Monmenu";
import * as colors from "./colors/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={
            {
              // headerShadowVisible: false,
            }
          }
        >
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              headerTitle: "",
              headerShown: false,
              headerStyle: { backgroundColor: colors.white },
            }}
          />
          <Stack.Screen
            name="Bon"
            component={Bon}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: colors.white },
            }}
          />
          <Stack.Screen
            name="Monmenu"
            component={Monmenu}
            options={{
              headerTitle: "",
              // headerStyle: { backgroundColor: colors.white },
            }}
          />
          <Stack.Screen
            name="Accueil"
            component={Accueil}
            options={{
              headerTitle: "",
              headerShown: false,
              headerStyle: { backgroundColor: colors.blueCollect },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
