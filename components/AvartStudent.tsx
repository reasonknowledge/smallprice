import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as colors from "../colors/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import StudentGrade from "../screens/Agent";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  StudentGrade: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { height } = Dimensions.get("window");

const AvartStudent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  const navigateTo = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.containerAvatar}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.AvartStudent}>
          <Image
            style={styles.avatarStyles}
            source={require("../assets/image6.jpg")}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalInnerContainer}>
              <Image
                style={styles.image}
                source={require("../assets/image6.jpg")}
              />
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.detailButton}
                onPress={() => navigateTo("StudentGrade")}
              >
                <Text style={styles.buttonTextdetailButton}>Détails</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AvartStudent;

const styles = StyleSheet.create({
  containerAvatar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 35,
    borderColor: colors.red500,
    backgroundColor: colors.white,
  },
  AvartStudent: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  avatarStyles: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: height / 2,
    width: "88%",
    backgroundColor: colors.white,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "74%",
  },
  modalInnerContainer: {
    flex: 1,
    gap: 6,
  },
  cancelButton: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.gray300,
  },
  detailButton: {
    borderRadius: 6,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  buttonText: {
    textAlign: "center",
    color: colors.gray600,
  },
  buttonTextdetailButton: {
    textAlign: "center",
    color: colors.white,
  },
});
