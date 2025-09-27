import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AudioLines } from "lucide-react-native";
import * as colors from "../colors/Colors";

const CallingHeaderTitleCustom = () => {
  return (
    <View style={styles.containIconTitleStudent}>
      <AudioLines size={24} color={colors.white} strokeWidth={1} />
    </View>
  );
};

export default CallingHeaderTitleCustom;

const styles = StyleSheet.create({
  containIconTitleStudent: {},
});
