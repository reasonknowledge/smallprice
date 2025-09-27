import { StyleSheet, View } from "react-native";
import React from "react";
import * as colors from "../colors/Colors";

interface SeparatorProps {
  color?: string; // Couleur personnalisée
  marginVertical?: number; // Marge verticale
}

const Separator: React.FC<SeparatorProps> = ({
  color = colors.gray300, // gray300 par défaut
  marginVertical = 0,
}) => {
  return <View style={[styles.separator, { backgroundColor: color, marginVertical }]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
  },
});