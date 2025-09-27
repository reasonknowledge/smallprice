import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  DollarSign,
  Filter,
  Map,
  MapPin,
  Pin,
  PinIcon,
  Users,
} from "lucide-react-native";
import Collapsible from "react-native-collapsible";
import * as colors from "../colors/Colors";

export default function Search() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const OpenFilterChoices = () => setIsOpen(!isOpen);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput style={styles.input} />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={OpenFilterChoices}
        >
          <Filter size={20} />
        </TouchableOpacity>
      </View>
      <Collapsible collapsed={isOpen} style={styles.collapsibleContainer}>
        <View style={styles.budgetHeader}>
          <View>
            <DollarSign size={18} color={colors.gray500} />
          </View>
          <View style={styles.budgetTitleContainer}>
            <Text style={styles.budgetTitle}>Budget</Text>
          </View>
        </View>
        <View style={styles.budgetHeader}>
          <View>
            <Users size={18} color={colors.gray500} />
          </View>
          <View style={styles.budgetTitleContainer}>
            <Text style={styles.budgetTitle}>Nombre de personnes</Text>
          </View>
        </View>
        <View style={styles.budgetHeader}>
          <View>
            <MapPin size={18} color={colors.gray500} />
          </View>
          <View style={styles.budgetTitleContainer}>
            <Text style={styles.budgetTitle}>Contient</Text>
          </View>
        </View>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    flexGrow: 1,
    borderRadius: 20,
    height: 36,
    width: 100,
    backgroundColor: colors.white,
  },
  filterButton: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  collapsibleContainer: {
    padding: 20,
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  budgetHeader: {
    gap: 4,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: colors.gray500,
  },
  budgetTitleContainer: {
    flexGrow: 1,
    padding: 2,
    borderBottomWidth: 1,
    borderColor: colors.gray300,
  },
  budgetTitle: {
    fontWeight: "bold",
    color: colors.gray500,
  },
});
