import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as colors from "../colors/Colors";

export default function Identity() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.whiteContainer}>
          <Image
            source={require("../assets/image1.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nom</Text>
            <View style={styles.inputBox}>
              <Text style={styles.text}>NGOUBOUNKOU</Text>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Prénom</Text>
            <View style={styles.inputBox}>
              <Text style={styles.text}>Franck</Text>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Votre email"
              defaultValue="reason@gmail.com"
              placeholderTextColor={colors.gray500}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quartier</Text>
            <TextInput
              style={styles.inputText}
              placeholder="Votre quartier"
              defaultValue="Mingara"
              placeholderTextColor={colors.gray500}
            />
          </View>
          <Image
            source={require("../assets/qr.png")}
            style={{ width: 200, height: 170, alignSelf: "center" }}
          />
          <TouchableOpacity style={styles.submit}>
            <Text style={{ color: colors.white }}>
              Sauvegarder les modifications
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.blueCollect,
  },
  whiteContainer: {
    position: "relative",
    width: "100%",
    height: 600,
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    position: "absolute",
    top: -40,
    alignSelf: "center",
    borderRadius: 80,
  },
  formContainer: {
    position: "absolute",
    top: 80,
    width: "90%",
    alignSelf: "center",
    // height: 600,
  },
  inputGroup: {
    gap: 10,
    width: "100%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
  },
  label: {
    color: colors.gray500,
    paddingHorizontal: 10,
  },
  inputBox: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray300,
    padding: 10,
  },
  text: {
    color: colors.gray500,
  },
  inputText: {
    color: colors.gray500,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.gray300,
    padding: 10,
  },
  submit: {
    padding: 8,
    alignItems: "center",
    backgroundColor: colors.blueCollect,
    borderRadius: 6,
  },
});
