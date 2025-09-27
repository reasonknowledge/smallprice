import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import * as colors from "../colors/Colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  [key: string]:
    | undefined
    | { nom: string; photoProfile: ImageSourcePropType; nbreTaxes: number };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * Composant AgentItem qui affiche les informations d'un agent
 * @param {AgentItemProps} props - Les propriétés du composant
 * @returns {React.ReactElement}
 */
interface AgentItemProps {
  nom?: string;
  photoProfile?: ImageSourcePropType;
  nbreTaxes?: number;
  screenName?: string;
  onPress?: (data: {
    nom: string;
    photoProfile: ImageSourcePropType;
    nbreTaxes: number;
  }) => void;
}

const AgentItem: React.FC<AgentItemProps> = ({
  nom = "Mr KASONGO",
  photoProfile = require("../assets/image1.jpg"),
  nbreTaxes = 10000,
  screenName,
  onPress,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigation = () => {
    if (onPress) {
      onPress({
        nom,
        photoProfile,
        nbreTaxes,
      });
    }
    if (screenName) {
      navigation.navigate(screenName, {
        nom,
        photoProfile,
        nbreTaxes,
      });
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.agentRow} onPress={handleNavigation}>
        <View style={styles.agentInfo}>
          <Image source={photoProfile} style={styles.agentImage} />
          <View style={{width:100 ,}}>
            <Text style={styles.agentName}>{nom}</Text>
            <Text style={styles.agentTaxes}>{nbreTaxes} taxes prélevés</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  agentRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom:4,
  },
  agentInfo: {
    flexDirection: "row",
    gap: 5,
  },
  agentImage: {
    width: 35,
    height: 35,
    borderRadius: 45,
  },
  agentName: {
    fontWeight: "bold",
    fontSize:12,
  },
  agentTaxes: {
    color: colors.gray500,
    fontSize: 10,
  },
});

export default AgentItem;