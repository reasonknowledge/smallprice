import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as colors from "./../colors/Colors";

const Tableheaderstudents = () => {
  return (
    <View style={styles.tableHeadercontainer}>
      <View style={styles.column1}>
        <Text style={styles.texttableHeader}>Etudiant</Text>
      </View>
      <View style={styles.column2}>
        <Text style={styles.texttableHeader}>Filière</Text>
      </View>
    </View>
  );
};

export default Tableheaderstudents;

const styles = StyleSheet.create({
  tableHeadercontainer: {
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: colors.gray300,
  },
  column1: {
    flex: 1,
    justifyContent: "center",
    borderEndWidth: 0.5,
    borderColor: colors.gray300,
  },
  texttableHeader: {
    flexDirection: "row",
    textAlign: "center",
    padding: 10,
    color:colors.gray500
  },
  column2: {
    flex: 1,
    justifyContent: "center",
  },
});
