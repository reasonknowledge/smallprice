import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import React from "react";
import * as colors from "../colors/Colors";

interface ItemStudentProps {
  img?: ImageSourcePropType;
  width?: number;
  height?: number;
  borderRadius?: number;
  badgeWidth?: number;
  badgeHeight?: number;
  badgeColor?: string;
  borderRadiusBadge?: number;
  borderWidthBadge?: number;
  borderColorBadge?: string;
  badgePosition?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const ItemStudent: React.FC<ItemStudentProps> = ({
  img = require("../assets/image6.jpg"),
  width = 50,
  height = 50,
  borderRadius = 50,
  badgeWidth = 8,
  badgeHeight = 8,
  badgeColor = colors.emerald500,
  borderWidthBadge = 1,
  borderColorBadge = colors.white,
  borderRadiusBadge = 20,
  badgePosition = { bottom: 4, right: 2 },
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerImage}>
        <Image style={styles.imageStyle} source={img} resizeMode="cover" />
        <View style={[styles.badge, badgePosition]} />
      </View>
    </View>
  );
};

export default ItemStudent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
  },
  containerImage: {
    width: 55,
    height: 55,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  badge: {
    width: 8,
    height: 8,
    backgroundColor: colors.emerald500,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.white,
    position: "absolute",
  },
});
