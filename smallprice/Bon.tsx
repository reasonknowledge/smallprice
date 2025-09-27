import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as colors from "../colors/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Info, MapPin, DollarSign } from "lucide-react-native";

export default function Bon() {
  // États pour stocker les données du formulaire
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [minPrice, setMinPrice] = useState("");

  // Fonction de soumission
  const handleSubmit = async () => {
    if (!name || !address || !minPrice) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs obligatoires");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.3:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          address,
          min_price: minPrice, // correspond au champ MySQL
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Succès", "Restaurant ajouté avec succès !");
        setName("");
        setDescription("");
        setAddress("");
        setMinPrice("");
      } else {
        Alert.alert("Erreur", data.error || "Une erreur est survenue");
      }
    } catch (error) {
      Alert.alert("Erreur", "Impossible de se connecter au serveur");
      console.error(error);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      extraScrollHeight={20}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.title}>Ajouter un restaurant</Text>
        <Text style={styles.subtitle}>
          Complétez les informations ci-dessous
        </Text>
      </View>

      {/* Informations générales */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Info size={18} color={colors.gray500} />
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Informations générales</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom du restaurant</Text>
          <TextInput
            placeholder="Nom du restaurant"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder="Décrivez le restaurant"
            multiline
            numberOfLines={3}
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>

      {/* Localisation */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MapPin size={18} color={colors.gray500} />
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Localisation</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Adresse</Text>
          <TextInput
            placeholder="Adresse complète"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
      </View>

      {/* Tarifs */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <DollarSign size={18} color={colors.gray500} />
          <View style={styles.sectionTitleWrapper}>
            <Text style={styles.sectionTitle}>Tarifs</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Prix minimal du repas</Text>
          <TextInput
            placeholder="Ex: 50 MAD"
            keyboardType="numeric"
            style={styles.input}
            value={minPrice}
            onChangeText={setMinPrice}
          />
        </View>
      </View>

      {/* Bouton */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 60,
  },
  header: {
    paddingVertical: 20,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  subtitle: {
    fontSize: 13,
    color: colors.gray500,
  },
  section: {
    padding: 12,
    marginBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 0.5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
  },
  sectionTitleWrapper: {
    borderBottomWidth: 1,
    borderColor: colors.gray300,
    paddingBottom: 2,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.gray500,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    paddingHorizontal: 5,
    marginBottom: 4,
    fontWeight: "600",
    color: colors.gray500,
  },
  input: {
    backgroundColor: colors.gray100,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  buttonWrapper: {
    marginTop: 10,
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
    fontSize: 16,
  },
});
