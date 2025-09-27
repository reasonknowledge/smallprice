import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as colors from "../colors/Colors"

const SigninTitleCustom = () => {
  return (
    <View>
      <MaterialCommunityIcons name="note-edit" size={24} color={colors.white} />
    </View>
  );
}

export default SigninTitleCustom

const styles = StyleSheet.create({})