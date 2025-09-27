import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as colors from "../colors/Colors";

const { width, height } = Dimensions.get("screen");

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async () => {
    if (!email || !password) {
      Alert.alert("Erreur", "L'email et le mot de passe sont obligatoires.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("http://192.168.1.3:3000/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Email ou mot de passe incorrect.");
      }

      Alert.alert("Succès", "Connexion réussie !");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
      Alert.alert("Erreur", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={Platform.OS === "ios" ? 20 : 50}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Image source={require("../assets/thinks.png")} style={styles.logo} />
          <View style={styles.inputGroup}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSignin}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "En cours..." : "Connexion"}
              </Text>
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
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    height: height / 2,
    gap: 20,
  },
  logo: {
    width: 300,
    height: 185,
  },
  inputGroup: {
    gap: 10,
  },
  inputWrapper: {
    padding: 4,
    borderRadius: 22,
    backgroundColor: colors.gray100,
  },
  input: {
    borderRadius: 20,
    backgroundColor: colors.white,
    height: 34,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 20,
    padding: 9,
    backgroundColor: colors.blue500,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
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
