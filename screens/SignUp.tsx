import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import * as colors from "../colors/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp() {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={20}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Céer un compte</Text>
        <Text style={styles.subtitle}>Rejoignez notre communauté !</Text>
      </View>

      {/* Form */}
      <View style={styles.formWrapper}>
        {/* Champ Nom utilisateur */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom utilisateur</Text>
          <TextInput placeholder="Nom utilisateur" style={styles.input} />
        </View>

        {/* Champ Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Champ Mot de passe */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            placeholder="Mot de passe"
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Champ Confirmation */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirmation</Text>
          <TextInput
            placeholder="Confirmation Mot de passe"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerDroits}>
          <Text style={styles.textDroits}>Tous Droits Reservés</Text>
          <Text style={styles.textDroits}>Provided By Thinks app</Text>
          <Text style={styles.textDroits}>
            {"\u00A9"} {new Date().getFullYear()}
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  header: {
    gap: 10,
    paddingVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    fontSize: 12,
    color: colors.gray500,
  },
  formWrapper: {
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  inputGroup: {
    padding: 10,
    gap: 4,
  },
  label: {
    paddingHorizontal: 8,
    fontWeight: "bold",
    color: colors.gray500,
  },
  input: {
    backgroundColor: colors.gray100,
    height: 36,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    paddingHorizontal: 10,
    paddingVertical:16,
  },
  button: {
    padding: 9,
    borderRadius: 20,
    backgroundColor: colors.blue500,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
  },
  containerDroits: {
    alignItems: "center",
  },
  textDroits: {
    color: colors.gray500,
    fontSize: 10,
  },
});
