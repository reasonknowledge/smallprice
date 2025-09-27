import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Home } from 'lucide-react-native';
import * as colors from "../colors/Colors"

const Homeheader = () => {
  return (
    <View style={styles.mainheader}>
      <Home size={24} strokeWidth={1} color={colors.white} />
      <Text style={{ color: "white", marginLeft: 8, fontSize: 18 }}>
        Accueil
      </Text>
    </View>
  );
}

export default Homeheader

const styles = StyleSheet.create({
  mainheader: {
    flexDirection:"row",
    borderWidth: 3,
    paddingLeft:8,
  },
  imgstyle: {
    width:"100%",
    height:60,
  }
});