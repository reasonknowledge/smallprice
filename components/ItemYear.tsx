import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import * as colors from "../colors/Colors";
import { BarChart } from "react-native-gifted-charts";
import { bluespecial } from "./../colors/Colors";
import Collapsible from "react-native-collapsible";
import Separator from "./Separator";
import { Dimensions } from "react-native";
import Avatar from "../components/Avatar";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("screen");

const ItemYear = () => {
  const [isParentOpen, setIsParentOpen] = useState<boolean>(false);
  const [isNestedOpen, setIsNestedOpen] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleParentCollapse = () => setIsParentOpen(!isParentOpen);
  const toggleNestedCollapse = () => setIsNestedOpen(!isNestedOpen);
  const toggleModal = () => setModalVisible(!modalVisible);
  const toggleBar = () => setIsOpen(!isOpen);

  const Collectdays = [
    { value: 4500, label: "S1", frontColor: colors.cyan400 }, // Lundi
    { value: 2500, label: "S2", frontColor: colors.lightBlue400 }, // Mardi
    { value: 5000, label: "S3", frontColor: colors.color1 }, // Mercredi
    { value: 3000, label: "S4", frontColor: colors.color3 }, // Jeudi
    // { value: 5000, label: "V", frontColor: colors.cyan400 }, // Vendredi
    // { value: 2000, label: "S", frontColor: colors.gray400 }, // Samedi
  ];

  const Collectday = [
    { value: 4500, label: "S1", frontColor: colors.cyan400 }, // Lundi
  ];

  const screenHeight = Dimensions.get("window").height;
  const modalHeight = screenHeight / 4;

  function AvatarList() {
    const avatars = [
      { id: "1", source: require("../assets/image2.jpg"), name: "Franck" },
      { id: "2", source: require("../assets/image3.jpg"), name: "Alice" },
      { id: "3", source: require("../assets/image4.jpg"), name: "Bob" },
      { id: "4", source: require("../assets/image5.jpg"), name: "Charlie" },
    ];

    return (
      <View style={styles.containerList}>
        <FlatList
          data={avatars}
          renderItem={({ item }) => <Avatar source={item.source} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 2 }}>
      <TouchableOpacity style={styles.ItemYear} onPress={toggleParentCollapse}>
        <Text>Année 2024</Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={toggleParentCollapse}
        >
          <Text style={styles.viewButtonText}>Voir</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <Collapsible collapsed={!isParentOpen}>
        <View style={styles.collapchild}>
          <TouchableOpacity
            style={styles.monthButton}
            onPress={toggleNestedCollapse}
          >
            <Text style={styles.monthButtonText}>Janvier</Text>
            <Text style={styles.monthButtonText}>20 personnes</Text>
          </TouchableOpacity>
          <Collapsible collapsed={!isNestedOpen} style={{ marginBottom: 80 }}>
            <View style={styles.collapsContainer}>
              <BarChart
                isAnimated
                // renderTooltip={AvatarList}
                data={Collectdays}
                side="right"
                spacing={48}
                sideColor={colors.gray600}
                barWidth={20}
                barBorderRadius={6}
                initialSpacing={20}
                hideRules
                yAxisIndicesColor={colors.gray500}
                xAxisColor={colors.gray600}
                yAxisColor={colors.gray600}
                yAxisThickness={0}
                xAxisThickness={0}
                noOfSections={6}
                showGradient
                showValuesAsTopLabel
                topLabelTextStyle={styles.toplabel}
                stepHeight={35}
                onPress={toggleBar}
              />
            </View>

            <Collapsible collapsed={isOpen} style={styles.col}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                <Text>S1</Text>
                <LinearGradient
                  colors={[colors.cyan300, colors.cyan100]}
                  style={{ borderRadius: 6, flex: 1 }}
                >
                  <View style={{ borderRadius: 6, padding: 9 }}></View>
                </LinearGradient>
              </View>
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Avatar source={require("../assets/image1.jpg")} />
                  <View style={styles.weeklyContainer}>
                    <View style={{ paddingLeft: 4 }}>
                      <Text style={{ fontSize: 12, color: colors.gray600 }}>
                        N° Box:123AJNFE
                      </Text>
                      <Text style={{ fontSize: 12, color: colors.gray600 }}>
                        12-09-2025 13H04
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text>1500 FCFA</Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Avatar source={require("../assets/image1.jpg")} />
                  <View style={styles.weeklyContainer}>
                    <View style={{ paddingLeft: 4 }}>
                      <Text style={{ fontSize: 12, color: colors.gray600 }}>
                        N° Box:123AJNFE
                      </Text>
                      <Text style={{ fontSize: 12, color: colors.gray600 }}>
                        12-09-2025 13H04
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text>1500 FCFA</Text>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Avatar source={require("../assets/image1.jpg")} />
                  <View style={styles.weeklyContainer}>
                    <View style={{ paddingLeft: 4 }}>
                      <Text style={{ fontSize: 12, color: colors.gray600 }}>
                        N° Box:123AJNFE
                      </Text>
                      <Text style={{ fontSize: 12, color: colors.gray600 }}>
                        12-09-2025 13H04
                      </Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text>1500 FCFA</Text>
                    </View>
                  </View>
                </View>

                <Text
                  style={{
                    fontWeight: "bold",
                    position: "absolute",
                    bottom: -30,
                    right: 0,
                  }}
                >
                  Total S1: 15.000frs
                </Text>
              </View>
            </Collapsible>

            <View style={styles.rowContainer}>
              <View style={styles.imageTextContainer}>
                <TouchableOpacity onPress={toggleModal}>
                  <Image
                    source={require("../assets/image1.jpg")}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.boldText}>Nom</Text>
                  <Text style={styles.grayText}>Akanda</Text>
                </View>
              </View>
              <View>
                <Text style={styles.boldText}>Montant</Text>
                <Text style={styles.grayText}>1000 FCFA</Text>
              </View>
              <View>
                <Text style={styles.boldText}>19-05-2025</Text>
                <Text style={[styles.grayText, styles.rightAlignText]}>
                  12H00
                </Text>
              </View>
            </View>
            <Separator />
            <View style={styles.rowContainer}>
              <View style={styles.imageTextContainer}>
                <TouchableOpacity onPress={toggleModal}>
                  <Image
                    source={require("../assets/image1.jpg")}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.boldText}>Nom</Text>
                  <Text style={styles.grayText}>Akanda</Text>
                </View>
              </View>
              <View>
                <Text style={styles.boldText}>Montant</Text>
                <Text style={styles.grayText}>1000 FCFA</Text>
              </View>
              <View>
                <Text style={styles.boldText}>19-05-2025</Text>
                <Text style={[styles.grayText, styles.rightAlignText]}>
                  12H00
                </Text>
              </View>
            </View>
            <Separator />
            <View style={styles.rowContainer}>
              <View style={styles.imageTextContainer}>
                <TouchableOpacity onPress={toggleModal}>
                  <Image
                    source={require("../assets/image1.jpg")}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.boldText}>Nom</Text>
                  <Text style={styles.grayText}>Akanda</Text>
                </View>
              </View>
              <View>
                <Text style={styles.boldText}>Montant</Text>
                <Text style={styles.grayText}>1000 FCFA</Text>
              </View>
              <View>
                <Text style={styles.boldText}>19-05-2025</Text>
                <Text style={[styles.grayText, styles.rightAlignText]}>
                  12H00
                </Text>
              </View>
            </View>
          </Collapsible>
        </View>
      </Collapsible>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require("../assets/image1.jpg")}
              style={styles.imageModal}
            />
            <View style={{ padding: 12, justifyContent: "center" }}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModal}
              >
                <Text style={styles.textClose}>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemYear: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    // margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  viewButton: {
    borderWidth: 0.5,
    borderColor: colors.gray300,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  viewButtonText: {
    color: colors.blueCollect,
    fontWeight: "bold",
  },
  collapchild: {
    backgroundColor: colors.white,
    gap: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  imageTextContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  boldText: {
    fontWeight: "bold",
  },
  grayText: {
    fontWeight: "bold",
    fontSize: 12,
    color: colors.gray500,
  },
  rightAlignText: {
    textAlign: "right",
  },
  monthButton: {
    backgroundColor: colors.gray300,
    borderRadius: 6,
    padding: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  monthButtonText: {
    color: colors.gray600,
  },
  toplabel: {
    fontSize: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    height: Dimensions.get("screen").height * 0.35,
    width: Dimensions.get("screen").width * 0.8,
    margin: 20,
    backgroundColor: "white",
  },
  closeButton: {
    backgroundColor: colors.black,
    borderRadius: 6,
    padding: 9,
  },
  modalText: {
    textAlign: "center",
  },
  textClose: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageModal: {
    width: "100%",
    height: "70%",
  },
  collapsContainer: {
    marginVertical: 30,
    backgroundColor: colors.white,
    // position: "relative",
  },
  containerList: {
    position: "absolute",
    top: -55,
    left: -22,
    justifyContent: "center",
    elevation: 1,
    borderRadius: 6,
    paddingVertical: 4,
    backgroundColor: colors.white,
  },
  list: {
    paddingHorizontal: 4,
  },
  weeklyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  col: {
    borderRadius: 6,
    borderColor: colors.gray300,
    height: 200,
    padding: 10,
    gap: 10,
    position: "absolute",
    width: "100%",
    backgroundColor:colors.lightBlue200
  },
});

export default ItemYear;
