import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Users } from "lucide-react-native";
import * as colors from "../colors/Colors";

const StudentheaderTitleCustom = () => {
  return (
    <View style={styles.containIconTitleStudent}>
      <Users size={24} color={colors.white} strokeWidth={1} />
    </View>
  );
};

export default StudentheaderTitleCustom;

const styles = StyleSheet.create({
  containIconTitleStudent: {},
});
