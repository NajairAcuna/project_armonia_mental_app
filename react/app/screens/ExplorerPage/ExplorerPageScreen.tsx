import React, { useEffect, useState, Component } from "react";
import { SearchBar } from "@rneui/themed";
import {
  Alert,
  Modal,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  SwitchComponent,
  ScrollView,
} from "react-native";
import SearchBarComponent from "./SearchBar/SearchBarComponent";
import GeneralWellnessGroups from "./GeneralWellnessGroups/GeneralWellnessGroups";
import ProfilePopUp from "./ProfilePopUp/ProfilePopUp";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Link, useNavigation } from "expo-router";
import YourFriends from "../YourFriends/YourFriendsScreen";
import YourFriendsIcon from "./YourFriendsIcon/YourFriendsIconScreen";
import WhatAreYouFeelingIconScreen from "./WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import GroupListsIcon from "./GroupsListsIcon/GroupsListsIconScreen";
import { color } from "@rneui/base";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
// import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeIcon from "./HomeIcon/HomeScreenIcon";
import HomeIconButton from "./HomeIcon/HomeScreenIcon";
import { FlatList } from "react-native-gesture-handler";

export default function ExplorerPage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
              <View style={styles.Container2}>
            <SearchBarComponent />
            <ProfilePopUp />
          </View>

          <Text style={styles.MotivationalQuote}>"Have laughable dreams!"</Text>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>

          <GeneralWellnessGroups />
        </View>
      </ScrollView>

      <View style={styles.IconsForBar}>
        <YourFriendsIcon />
        <HomeIcon />
        <WhatAreYouFeelingIconScreen />
        <GroupListsIcon />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {},
  IconsForBar: {
    top: 0,
    justifyContent: "space-evenly",
    left: 0,
    flexDirection: "row",
    backgroundColor: "#065064",
    paddingBottom: 10,
    borderWidth: 4,
    borderColor: "#065064",
  },
  MotivationalQuote: {
    textAlign: "center",
    fontFamily: "AveriaSerif-Light",
    fontSize: 25,
    top: -40,
    color: "white",
  },
  Container2: {
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#065064",
    paddingBottom: 100,
    paddingLeft: 25,
    paddingRight: 26,
    borderWidth: 4,
    borderColor: "#065064",
  },
  Gradient: {
    alignItems: "center",
    justifyContent: "center",
  },
});
