import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  SwitchComponent,
  Modal,
  Dimensions,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Link, router, useNavigation } from "expo-router";
import TopBar from "@/components/TopBar";
// import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
// import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
// import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
// import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
// import ProfilePopUp from "../../../components/ProfilePopUp";

export default function JournalScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const { width: screenWidth } = Dimensions.get("window");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // ../WhatAreYouFeeling/Journal/JournalScreen

  return (
    <View>
      <TopBar title="Prompt Choice" />
      <Image
        source={require("@/assets/extras/journal_top.png")}
        style={{
          width: screenWidth,
          height: 165,
          margin: 0,
          top: -5,
        }}
      />
      <Pressable
        onPress={() => {
          console.log("Navigating to journalNote");
          router.navigate("journalNote");
        }}
      >
        <Image
          source={require("@/assets/extras/prompt_choice.png")}
          style={{
            width: 370,
            height: 270,
            resizeMode: "contain",
            position: "absolute",
            top: 70,
            alignSelf: "center",
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  BackButton: {
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "flex-start",
    top: 535,
    backgroundColor: "white",
    left: 10,
  },
  TextBox: {
    borderWidth: 1,
    borderColor: "black",
    paddingStart: 0,
    width: 250,
    alignSelf: "center",
    top: 10,
    backgroundColor: "white",
    color: "black",
    paddingBottom: 70,
  },
  IconsSpaceBar: {
    top: 300,
    justifyContent: "space-evenly",
    left: -30,
    flexDirection: "row",
    backgroundColor: "#065064",
    paddingBottom: 50,
    borderWidth: 8,
    borderColor: "#065064",
    width: "120%",
  },
  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    margin: 10,
    alignSelf: "flex-end",
    left: -50,
    borderWidth: 1,
    top: -37,
    backgroundColor: "#6BD29F",
    width: "25%",
    height: "12%",
  },
  modalContent: {
    backgroundColor: "#1EA060",
    padding: 15,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#1EA060",
    height: "30%",
    width: "80%",
    borderBottomColor: "#1A7246",
  },
});
