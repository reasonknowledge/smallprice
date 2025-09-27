import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as colors from "../colors/Colors";
import { Flashlight, X } from "lucide-react-native";

export default function QrcodeScanConnexion() {
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [flash, setFlash] = useState("off");

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  // Écran principal
  if (!showCamera) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Scanner le Qr code</Text>
          <Image
            source={require("../assets/scanqr.gif")}
            style={styles.qrImage}
          />
          <Text style={styles.instruction}>
            Positionnez le Qr code dans le cadre pour vous connecter
            automatiquement
          </Text>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={() => setShowCamera(true)}
          >
            <Text style={styles.scanButtonText}>Ouvrir la camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Écran caméra
  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        enableTorch={flash === "on"}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={({ data }) => {
          console.log("QR Scanné :", data);
          setShowCamera(false);
        }}
      />
      
      {/* Boutons en bas */}
      <View style={styles.controls}>
        {/* Bouton lampe */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setFlash(flash === "on" ? "off" : "on")}
        >
          <Flashlight size={26} color={colors.white} />
        </TouchableOpacity>

        {/* Bouton fermer */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => setShowCamera(false)}
        >
          <X size={26} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    gap: 10,
    height: 360,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
  },
  qrImage: {
    width: 200,
    height: 200,
  },
  instruction: {
    textAlign: "center",
    width: 200,
    color: colors.gray500,
  },
  scanButton: {
    width: "90%",
    borderRadius: 10,
    padding: 9,
    borderColor: colors.gray300,
    backgroundColor: colors.blueCollect,
  },
  scanButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
  },
  controls: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  controlButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
});
