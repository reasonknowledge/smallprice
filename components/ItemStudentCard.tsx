import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import * as colors from "../colors/Colors";
import * as constant from "../constant/Size";

interface ItemStudentCardProps {
  width?: number;
  height?: number;
  img?: ImageSourcePropType;
  borderRadiusCard?: number;
}

const ItemStudentCard: React.FC<ItemStudentCardProps> = ({
  width = constant.WIDTH_THIRD,
  height = 150,
  img = require("../assets/image6.jpg"),
  borderRadiusCard = 5,
}) => {
  return (
    <View style={[styles.container, { width, borderRadius: borderRadiusCard }]}>
      <Image
        source={img}
        style={[styles.image, { height, width: width - 16 }]} 
      />
      <Text style={styles.text}>Dr Michel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: colors.gray300,
    padding: 8,
    gap: 4,
    backgroundColor: colors.gray50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  image: {

  },
});

export default ItemStudentCard;
