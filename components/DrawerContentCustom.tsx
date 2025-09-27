import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import * as colors from "../colors/Colors";
import { image1 } from "../assets/image6.jpg";

const DrawerContentCustom = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profileContainer}>
        <Image source={image1} style={styles.profileImage} />
        <Text style={styles.userName}>Hervé</Text>
        <Text style={styles.userEmail}>franckngoubounkou@gmail.com</Text>
      </View>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContent}
      >
        <DrawerItemList {...props} />

        <View style={styles.footerConyainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/Collect.png")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.footerText}>Tous droits réservés.</Text>
          <Text style={styles.footerText}>© 2023 CheckStudents App.</Text>
          <Text style={styles.footerText}>Version 1.0.0</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: "center",
    width: "100%",
    padding: 16,
    height: 200,
    paddingBottom: 20,
    backgroundColor: colors.blueCollect,
  },
  drawerContent: {
    paddingTop: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  userEmail: {
    fontSize: 14,
    color: colors.white,
  },
  footerText: {
    fontSize: 10,
    color: "#000",
    textAlign: "center",
  },
  footerItem: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  footerConyainer: {
    height: 170,
    flexDirection: "column",
    justifyContent: "flex-end",
    // borderWidth:1,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});

export default DrawerContentCustom;
