import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import * as colors from "./../colors/Colors";

interface PlanifierItemProps {
  imageSource: ImageSourcePropType;
  name: string;
  id: string;
  plannedDate: string;
  market: string;
  onScanPress: () => void;
}

const PlanifierItem: React.FC<PlanifierItemProps> = ({
  imageSource,
  name,
  id,
  plannedDate,
  market,
  onScanPress,
}) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.innerRowContainer}>
        <Image source={imageSource} style={styles.image} />
        <View>
          <Text style={styles.boldText}>{name}</Text>
          <Text style={styles.smallGrayText}>{id}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.boldText}>Plannifié</Text>
          <Text style={styles.smallGrayText}>{plannedDate}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.boldText}>{market}</Text>
      </View>
      <View style={styles.scanButtonContainer}>
        <TouchableOpacity style={styles.scanButton} onPress={onScanPress}>
          <Text style={styles.smallGrayText}>Scannez le Qrcode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanifierItem;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    gap: 8,
    borderWidth: 0,
    padding: 4,
  },
  innerRowContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  boldText: {
    fontWeight: "bold",
  },
  smallGrayText: {
    fontWeight: "bold",
    fontSize: 10,
    color: colors.gray500,
  },
  scanButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  scanButton: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.gray300,
    paddingHorizontal: 6,
    paddingVertical: 6,
    alignItems: "center",
    flexDirection: "row",
  },
});
