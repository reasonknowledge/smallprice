import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "../screens/Notifications";
import Students from "../screens/Students";
import StudentGrade from "../screens/Agent";
import Menu from "../screens/Menu";
import * as colors from "./../colors/Colors";
import Home from "./../screens/Home";
import StudentheaderTitleCustom from "./StudentheaderTitleCustom";
import NotificatioHeaderCustom from "./NotificatioHeaderCustom";
import {
  Bell,
  ChartNoAxesColumn,
  HomeIcon,
  Notebook,
  NotebookText,
  Users,
} from "lucide-react-native";
import DrawerContentCustom from "./DrawerContentCustom";
import StudentStatics from "../screens/StudentStatics";
import Identity from "./Identity";

const Drawer = createDrawerNavigator();

const Drawercustom = () => {
  return (
    <Drawer.Navigator
      drawerContent={(probs) => <DrawerContentCustom {...probs} />}
      screenOptions={{
        drawerStyle: {
          padding: 0,
        },
        drawerLabelStyle: {
          marginLeft: 0,
        },
        drawerActiveTintColor: colors.gray500,
        drawerItemStyle: {
          borderRadius: 5,
          height: 40,
          justifyContent: "center",
          marginHorizontal: 5,
          marginVertical: 4,
        },
      }}
    >
      <Drawer.Screen
        name="Accueil"
        component={Home}
        options={{
          headerTitle: "",
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.blueCollect },
          drawerIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <HomeIcon size={20} color={color} strokeWidth={0.8} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Students"
        component={Students}
        options={{
          headerTintColor: colors.white,
          headerTitle: () => <StudentheaderTitleCustom />,
          headerStyle: { backgroundColor: colors.blueCollect },
          drawerIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Users size={20} color={color} strokeWidth={0.8} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerTintColor: colors.white,
          headerRight: () => <NotificatioHeaderCustom />,
          headerStyle: { backgroundColor: colors.blueCollect },
          drawerIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Bell size={20} color={color} strokeWidth={1} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Mes notes et abscences"
        component={StudentGrade}
        options={{
          headerTintColor: colors.white,
          headerRight: () => <NotificatioHeaderCustom />,
          headerStyle: { backgroundColor: colors.blueCollect },
          drawerIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <NotebookText size={20} color={color} strokeWidth={1} />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="Mes abscences"
        component={Identity}
        options={{
          headerTintColor: colors.white,
          headerRight: () => <NotificatioHeaderCustom />,
          headerStyle: { backgroundColor: colors.blueCollect ,shadowOffset:{width:0,height:0,} },
          drawerIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <ChartNoAxesColumn size={20} color={color} strokeWidth={1} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawercustom;

const styles = StyleSheet.create({
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -14,
    backgroundColor: colors.white,
    // backgroundColor: colors.gray200,
  },
});
