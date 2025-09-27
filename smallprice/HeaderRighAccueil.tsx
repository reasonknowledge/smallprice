import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { Plus, SearchIcon, X } from "lucide-react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { BlurView } from "expo-blur";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import * as colors from "../colors/Colors"


type RootStackParamList = {
  Monmenu: undefined;
  Bon: undefined;
};

export default function HeaderRighAccueil() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Options du RadioGroup
  const radioButtons = [
    { id: "1", label: "Ajouter un menu", value: "menu" },
    { id: "2", label: "Ajouter un bon coin", value: "boncoin" },
  ];

  // Fonction pour gérer la navigation
  const handleConfirm = () => {
    setModalVisible(false);
    if (selectedId === "1") {
      navigation.navigate("Monmenu"); // navigation vers l’écran Monmenu
    } else if (selectedId === "2") {
      navigation.navigate("Bon"); // navigation vers l’écran Bon
    }
  };

  return (
    <View>
      {/* Header icons */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Plus />
        </TouchableOpacity>
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView tint="light" style={styles.overlay}>
          <View style={styles.modalContent}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() => setModalVisible(false)}
              >
                <X size={24} color={colors.black} strokeWidth={1} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalTitle}>Choisissez une action</Text>
            <RadioGroup
              containerStyle={styles.radioGroup}
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
              layout="column"
            />

            {/* Bouton confirmer */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirmez</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    marginRight: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    position: "relative",
  },
  closeIcon: {
    padding: 2,
    borderRadius:24,
    backgroundColor: colors.gray100,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  confirmButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007BFF",
    borderRadius: 8,
  },
  confirmButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  radioGroup: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
