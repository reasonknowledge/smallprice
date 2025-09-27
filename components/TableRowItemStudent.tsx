import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import * as colors from "../colors/Colors";
import AvartStudent from "./AvartStudent";



const RowItemStudent = () => {
  return (
    <View style={{ padding: 4, borderWidth: 0.5, borderColor: colors.gray300 }}>
      <View style={styles.bodytableItemStudent}>
        <View style={styles.column1}>
          <AvartStudent />
          <View style={styles.containerText}>
            <Text style={styles.textInfoIdentity}>NGOUBOUNKOU</Text>
            <Text style={styles.textInfoIdentity}>Franck H.</Text>
          </View>
        </View>
        <View style={styles.column2}>
          <Text style={styles.textInfoIdentity}>4ISI</Text>
        </View>
      </View>
    </View>
  );
};

export default RowItemStudent;

const styles = StyleSheet.create({
  bodytableItemStudent: {
    flexDirection: "row",
  },
  column1: {
    flex: 1,
    flexDirection: "row",
    gap: 2,

    borderEndWidth: 0.5,
    borderColor: colors.gray300,
  },
  containerText: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  column2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInfoIdentity: {
    fontSize: 12,
    textAlign: "center",
  },
});
 