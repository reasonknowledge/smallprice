import { StyleSheet, Text, View ,} from 'react-native'
import React from 'react'
import * as colors from "../colors/Colors";
import { Home } from "lucide-react-native";


const HomeTitleCustome = () => {
  return (
    <View style={styles.containIconTitleHome}>
      <Home size={24} color={colors.white} strokeWidth={1} />
    </View>
  );
}

export default HomeTitleCustome

const styles = StyleSheet.create({
  containIconTitleHome:{}
});