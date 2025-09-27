import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootTabParamList = {
  Acceuil: undefined;
  Admin: undefined;
  SignIn: undefined;
  Agent: undefined;
  SignUp: undefined;
};

import * as colors from "../colors/Colors";
import StudentheaderTitleCustom from "./../components/StudentheaderTitleCustom";
import Accueil from "../smallprice/Accueil";
import Signin from "../smallprice/Signin";
import Search from "../smallprice/Search";
import Monmenu from "../smallprice/Monmenu";
import SignUp from "./SignUp";
import Bon from "../smallprice/Bon";

import {
  HomeIcon,
  Users,
  SearchIcon,
  MenuIcon
} from "lucide-react-native";
import Afrique from "../smallprice/Afrique";
import HeaderRighAccueil from "../smallprice/HeaderRighAccueil";

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("screen");

const Menu = () => {
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        // headerShadowVisible: false,
        tabBarActiveTintColor: colors.blue500,
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Accueil}
        options={{
          headerTitle: "Manger a petit Prix",
          headerTintColor: colors.black,
          headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
          headerRight: () => <HeaderRighAccueil />,
          tabBarIcon: ({ size, color }) => (
            <View style={styles.icontabBar}>
              <HomeIcon size={24} color={colors.gray500} strokeWidth={0.6} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={Signin}
        options={{
          // headerShown:false,
          headerStyle: { backgroundColor: colors.white },
          tabBarIcon: ({ size, color }) => (
            <View style={styles.icontabBar}>
              <MenuIcon size={24} color={colors.gray500} strokeWidth={1} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // headerShown:false,
          headerStyle: { backgroundColor: colors.white },
          tabBarIcon: ({ size, color }) => (
            <View style={styles.icontabBar}>
              <SearchIcon size={24} color={colors.gray500} strokeWidth={1} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SignUp"
        component={Afrique}
        options={{
          // headerShown:false,
          headerTintColor: colors.white,
          headerTitle: () => <StudentheaderTitleCustom />,
          headerStyle: { backgroundColor: colors.white },
          tabBarIcon: ({ size, color }) => (
            <View style={styles.icontabBar}>
              <Users size={24} color={colors.gray500} strokeWidth={1} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Menu;

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 10,
  },
  icontabBar: {},
  addButton: {
    borderWidth: 0.5,
    width: width * 0.21,
    height: height * 0.042,
    borderRadius: 6,
    borderColor: colors.gray300,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  addButtonText: {
    color: colors.white,
    textAlign: "center",
  },
});
