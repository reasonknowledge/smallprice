import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import * as colors from "../colors/Colors";
import { Timer, Users, Utensils } from "lucide-react-native";

interface MenuItem {
  id: number;
  nom: string;
  prix: string;
}

interface Menu {
  id: number;
  nom: string;
  description: string;
  timer: string;
  total: number;
  region: string;
  image?: string;
  nombre_personnes?: number;
  items: MenuItem[];
}

export default function Afrique() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("http://192.168.1.3:3000/menus", {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des menus");
        }

        const data = await response.json();
        const afriqueMenus = data.filter(
          (menu: Menu) => menu.region === "afrique"
        );
        setMenus(afriqueMenus);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  const renderMenu = ({ item }: { item: Menu }) => (
    <View style={styles.mainContent}>
      <View style={styles.content}>
        <Image
          source={
            item.image
              ? { uri: `http://192.168.1.3:3000/uploads/${item.image}` }
              : require("../assets/A.jpeg") // Image par défaut si pas d'image
          }
          style={styles.contentImage}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {item.description || "Aucune description disponible"}
          </Text>
          <Text style={styles.itemsText}>
            Ingrédients : {item.items.map((i) => i.nom).join(", ")}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <View style={styles.budgetContainer}>
            <Text style={styles.budgetText}>Budget: {item.total} DHS</Text>
          </View>
          <View style={styles.utensilsContainer}>
            <Text style={styles.utensilsText}>
              {item.nombre_personnes || "N/A"}
            </Text>
            <Users strokeWidth={1} size={20} />
          </View>
        </View>
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>{item.timer}</Text>
          <Timer strokeWidth={1} size={20} />
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erreur : {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/A.jpeg")}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Afrique</Text>
      </View>
      <FlatList
        data={menus}
        renderItem={renderMenu}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Aucun menu trouvé pour la région Afrique
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  header: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: colors.gray500,
  },
  headerImage: {
    width: 45,
    height: 45,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  listContainer: {
    paddingVertical: 10,
  },
  mainContent: {
    gap: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  content: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  contentImage: {
    width: 60,
    height: 80,
    borderRadius: 6,
  },
  descriptionContainer: {
    flexGrow: 1,
    borderRadius: 6,
    backgroundColor: colors.white,
    justifyContent: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  descriptionText: {
    fontSize: 13,
    marginBottom: 5,
  },
  itemsText: {
    fontSize: 12,
    color: colors.gray500,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerLeft: {
    flexDirection: "row",
    gap: 20,
  },
  budgetContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: colors.lightBlue100,
  },
  budgetText: {
    fontSize: 14,
  },
  utensilsContainer: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  utensilsText: {
    fontWeight: "semibold",
    fontSize: 18,
  },
  timerContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  timerText: {
    fontWeight: "semibold",
    fontSize: 18,
    color: colors.gray500,
  },
  loadingText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: colors.gray500,
  },
});