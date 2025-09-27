import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import * as colors from "./../colors/Colors";
import { Star } from "lucide-react-native";

export default function Accueil() {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <Image
          source={require("../assets/diners.png")}
          style={styles.bannerImage}
        />
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          >
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Tous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Afrique</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Europe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Asie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Amerique</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ gap: 4 }}>
          <Text style={{ paddingHorizontal: 4, fontWeight: "bold" }}>
            Menu du jour
          </Text>
          <View style={styles.menuCard}>
            <Image
              source={require("../assets/odika.jpg")}
              style={styles.menuImage}
            />
            <View style={styles.menuDetails}>
              <View style={styles.menuHeader}>
                <Text style={styles.menuTitle}>Odika</Text>
                <View style={styles.ratingContainer}>
                  <Star size={20} />
                  <Text>254 likes</Text>
                </View>
              </View>
              <View>
                <Text style={styles.menuDescriptionTitle}>Desciption</Text>
                <Text style={styles.menuDescriptionText}>
                  Spécialité de la gastro Gabonaise dans le Haut-Ogooué prisé
                  pour les occasions festives et familliale
                </Text>
              </View>
              <View style={styles.budgetContainer}>
                <Text style={styles.budgetText}>Budget: 50 dhs</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Text style={{ fontWeight: "bold" }}>J ai visité un bon coin</Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/bonmap.png")}
              style={{ width: undefined, height: 150, borderRadius: 10 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  bannerImage: {
    width: undefined,
    height: 200,
    borderRadius: 6,
  },
  categoryContainer: {
    gap: 10,
    paddingVertical: 4,
  },
  categoryButton: {
    backgroundColor: colors.blue500,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 22,
  },
  categoryButtonText: {
    color: colors.white,
    fontWeight: "bold",
  },
  menuCard: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gray300,
    backgroundColor: colors.white,
  },
  menuImage: {
    width: undefined,
    height: 130,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  menuDetails: {
    padding: 10,
  },
  menuHeader: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  menuTitle: {
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  menuDescriptionTitle: {
    color: colors.gray500,
    fontWeight: "bold",
  },
  menuDescriptionText: {
    color: colors.gray500,
    fontSize: 12,
  },
  budgetContainer: {
    paddingHorizontal: 10,
    backgroundColor: colors.blue500,
    alignSelf: "flex-start",
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 10,
  },
  budgetText: {
    fontWeight: "bold",
    color: colors.white,
  },
});
