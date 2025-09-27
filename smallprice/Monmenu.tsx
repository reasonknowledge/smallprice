import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Collapsible from "react-native-collapsible";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Trash2 } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import * as colors from "../colors/Colors";
import { ProduitProps } from "../data/Produits";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuItem {
  id: number;
  nom: string;
  prix: string;
}

interface MenuFinal {
  nom: string;
  description: string;
  timer: string;
  items: MenuItem[];
  total: number;
  region: string | null;
  image?: string;
  nombre_personnes?: number; // Ajout de nombre_personnes
}

export default function Monmenu() {
  const [produits, setProduits] = useState<ProduitProps[]>([
    {
      id: 1,
      nom: "Oignon",
      selected: false,
      prix: "",
      prixParDefaut: "5",
      isOpen: false,
    },
    {
      id: 2,
      nom: "Tomate",
      selected: false,
      prix: "",
      prixParDefaut: "6",
      isOpen: false,
    },
    {
      id: 3,
      nom: "Pomme de terre",
      selected: false,
      prix: "",
      prixParDefaut: "4",
      isOpen: false,
    },
    {
      id: 4,
      nom: "Carotte",
      selected: false,
      prix: "",
      prixParDefaut: "3",
      isOpen: false,
    },
    {
      id: 5,
      nom: "Poivron",
      selected: false,
      prix: "",
      prixParDefaut: "8",
      isOpen: false,
    },
    {
      id: 6,
      nom: "Ail",
      selected: false,
      prix: "",
      prixParDefaut: "10",
      isOpen: false,
    },
    {
      id: 7,
      nom: "Courgette",
      selected: false,
      prix: "",
      prixParDefaut: "7",
      isOpen: false,
    },
    {
      id: 8,
      nom: "Aubergine",
      selected: false,
      prix: "",
      prixParDefaut: "9",
      isOpen: false,
    },
  ]);

  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [nomMenu, setNomMenu] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [timer, setTimer] = useState<Date>(() => {
    const now = new Date();
    now.setHours(0, 10, 0, 0);
    return now;
  });
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [region, setRegion] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [nombrePersonnes, setNombrePersonnes] = useState<string>(""); // État pour nombre de personnes

  const prixOptions: RadioButtonProps[] = [
    { id: "3", label: "3 MAD", value: "3" },
    { id: "5", label: "5 MAD", value: "5" },
    { id: "10", label: "10 MAD", value: "10" },
  ];

  const regionOptions: RadioButtonProps[] = [
    { id: "afrique", label: "Afrique", value: "Afrique" },
    { id: "europe", label: "Europe", value: "Europe" },
    { id: "asie", label: "Asie", value: "Asie" },
    { id: "amerique", label: "Amérique", value: "Amérique" },
    { id: "aucune", label: "Aucune", value: "Aucune" },
  ];

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert(
        "La permission d'accéder à la bibliothèque de photos est requise !"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const toggleSelect = (id: number) => {
    const produitCourant = produits.find((p) => p.id === id);
    if (!produitCourant) return;

    if (!produitCourant.selected) {
      const present = menu.find((m) => m.id === id);
      setProduits((prev) =>
        prev.map((p) =>
          p.id === id
            ? {
                ...p,
                selected: true,
                isOpen: true,
                prix: present ? present.prix : p.prix || "",
              }
            : p
        )
      );
    } else {
      setMenu((prevMenu) => prevMenu.filter((m) => m.id !== id));
      setProduits((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, selected: false, isOpen: false, prix: "" } : p
        )
      );
    }
  };

  const handlePrixChange = (id: number, value: string) => {
    setProduits((prev) =>
      prev.map((produit) =>
        produit.id === id ? { ...produit, prix: value } : produit
      )
    );
  };

  const handleValiderProduit = (produit: ProduitProps) => {
    const prixFinal =
      produit.prix && produit.prix !== ""
        ? produit.prix
        : produit.prixParDefaut;
    if (!prixFinal) return;

    setMenu((prevMenu) => {
      const existe = prevMenu.find((m) => m.id === produit.id);
      if (existe)
        return prevMenu.map((m) =>
          m.id === produit.id ? { ...m, prix: prixFinal } : m
        );
      return [
        ...prevMenu,
        { id: produit.id, nom: produit.nom, prix: prixFinal },
      ];
    });

    setProduits((prev) =>
      prev.map((p) =>
        p.id === produit.id
          ? { ...p, prix: prixFinal, isOpen: false, selected: true }
          : p
      )
    );
  };

  const handleRemoveProduit = (id: number) => {
    setMenu((prev) => prev.filter((m) => m.id !== id));
    setProduits((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, selected: false, isOpen: false, prix: "" } : p
      )
    );
  };

  const total = menu.reduce((sum, item) => sum + Number(item.prix || 0), 0);

  const handleValiderMenu = async () => {
    if (!nomMenu.trim()) {
      alert("Veuillez entrer un nom pour le menu ❗");
      return;
    }

    const menuFinal: MenuFinal = {
      nom: nomMenu,
      description,
      timer: `${timer.getHours()}h${timer.getMinutes()}m`,
      items: menu,
      total,
      region,
      nombre_personnes: nombrePersonnes ? parseInt(nombrePersonnes) : undefined, // Convertir en entier
    };

    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(menuFinal));

      if (image) {
        const fileName = image.split("/").pop() || "image.jpg";
        formData.append("image", {
          uri: Platform.OS === "android" ? image : image.replace("file://", ""),
          name: fileName,
          type: "image/jpeg",
        } as any);
      }

      const response = await fetch("http://192.168.1.3:3000/menus", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Erreur lors de la création du menu");
      }

      const data = await response.json();
      console.log("✅ Menu créé :", data);
      alert("Menu enregistré en base ✅");

      setMenu([]);
      setNomMenu("");
      setDescription("");
      setRegion(null);
      setImage(null);
      setNombrePersonnes(""); // Réinitialiser le champ nombre_personnes
      const resetTimer = new Date();
      resetTimer.setHours(0, 10, 0, 0);
      setTimer(resetTimer);
      setProduits((prev) =>
        prev.map((p) => ({ ...p, selected: false, isOpen: false, prix: "" }))
      );
    } catch (err: any) {
      console.error("❌ Erreur :", err.message);
      alert(`Erreur lors de l'enregistrement ❌: ${err.message}`);
    }
  };

  return (
    <SafeAreaView style={{flex:1,}}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        extraScrollHeight={20}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >
        {produits.some((p) => p.selected) && (
          <View style={styles.menuContainer}>
            <Text style={styles.sectionTitle}>Créer votre menu</Text>

            <TextInput
              style={styles.input}
              placeholder="Nom du menu"
              value={nomMenu}
              onChangeText={setNomMenu}
            />
            <TextInput
              style={styles.input}
              placeholder="Description du menu"
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Nombre de personnes"
              value={nombrePersonnes}
              onChangeText={setNombrePersonnes}
              keyboardType="numeric" // Clavier numérique pour saisir un nombre
            />

            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <Text style={styles.uploadText}>
                {image ? "Image sélectionnée" : "Ajouter une photo"}
              </Text>
            </TouchableOpacity>
            {image && (
              <Image
                source={{ uri: image }}
                style={styles.previewImage}
                resizeMode="cover"
              />
            )}

            <TouchableOpacity
              style={styles.timerButton}
              onPress={() => setShowTimer(true)}
            >
              <Text style={styles.timerText}>
                Temps de cuisson : {timer.getHours()}h {timer.getMinutes()}m
              </Text>
            </TouchableOpacity>

            {showTimer && (
              <DateTimePicker
                mode="time"
                value={timer}
                is24Hour
                display="spinner"
                onChange={(event, selected) => {
                  setShowTimer(false);
                  if (selected) {
                    const newDate = new Date(timer);
                    newDate.setHours(
                      selected.getHours(),
                      selected.getMinutes(),
                      0,
                      0
                    );
                    setTimer(newDate);
                  }
                }}
              />
            )}

            <View style={styles.resumeContainer}>
              <Text style={styles.resumeTitle}>Résumé :</Text>
              {menu.map((item) => (
                <View key={item.id} style={styles.resumeItem}>
                  <Text>
                    {item.nom} - {item.prix} MAD
                  </Text>
                  <TouchableOpacity
                    onPress={() => handleRemoveProduit(item.id)}
                    style={styles.removeButton}
                  >
                    <Trash2 size={14} color={colors.white} />
                  </TouchableOpacity>
                </View>
              ))}
              <Text style={styles.total}>Total : {total} MAD</Text>
            </View>

            <Text style={styles.sectionTitle}>
              Choisissez la région du menu
            </Text>
            <RadioGroup
              radioButtons={regionOptions.map((r) => ({
                ...r,
                selected: region === r.value,
              }))}
              selectedId={region || ""}
              onPress={(id) => setRegion(id)}
              containerStyle={styles.radioContainer}
            />

            <TouchableOpacity
              style={styles.validateButton}
              onPress={handleValiderMenu}
              disabled={!region || menu.length === 0}
            >
              <Text style={styles.validateText}>Valider le menu</Text>
            </TouchableOpacity>
          </View>
        )}

        {produits.map((produit) => (
          <View key={produit.id} style={styles.produitContainer}>
            <View style={styles.itemContainer}>
              <View style={styles.productInfo}>
                <Image
                  source={require("../assets/oignon2.jpeg")}
                  style={styles.productImage}
                />
                <Text style={styles.productName}>{produit.nom}</Text>
              </View>
              <Checkbox
                color={colors.blue500}
                value={produit.selected}
                onValueChange={() => toggleSelect(produit.id)}
              />
            </View>

            <Collapsible collapsed={!produit.isOpen}>
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Prix personnalisé (MAD)"
                  value={produit.prix}
                  onChangeText={(text) => handlePrixChange(produit.id, text)}
                  keyboardType="numeric"
                />

                <RadioGroup
                  radioButtons={prixOptions.map((r) => ({
                    ...r,
                    selected: produit.prix === r.value,
                  }))}
                  selectedId={produit.prix}
                  onPress={(id) => handlePrixChange(produit.id, id)}
                  containerStyle={styles.radioContainer}
                />

                <TouchableOpacity
                  style={styles.validateButton}
                  onPress={() => handleValiderProduit(produit)}
                >
                  <Text style={styles.validateText}>Valider</Text>
                </TouchableOpacity>
              </View>
            </Collapsible>
          </View>
        ))}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { padding: 10, gap: 10 },
  menuContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sectionTitle: {
    margin: 10,
    color: colors.gray500,
    fontSize: 18,
    fontWeight: "bold",
  },
  timerButton: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  timerText: { fontSize: 16 },
  resumeContainer: {
    marginTop: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
  },
  resumeTitle: { fontWeight: "bold", marginBottom: 5 },
  resumeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  removeButton: { backgroundColor: "red", padding: 4, borderRadius: 4 },
  total: { marginTop: 10, fontWeight: "bold", fontSize: 16 },
  produitContainer: {},
  itemContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 6,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  productInfo: { gap: 10, flexDirection: "row", alignItems: "center" },
  productImage: { width: 40, height: 40, borderRadius: 10 },
  productName: { fontSize: 16 },
  formContainer: {
    padding: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 10,
  },
  radioContainer: {
    marginBottom: 10,
    borderColor: colors.blue500,
    alignItems: "flex-start",
  },
  validateButton: {
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: colors.blue500,
  },
  validateText: { color: "white", fontWeight: "bold" },
  uploadButton: {
    backgroundColor: colors.blue300,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  uploadText: {
    color: "white",
    fontWeight: "bold",
  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
});
