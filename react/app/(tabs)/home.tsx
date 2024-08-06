import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import SearchBarComponent from "../screens/ExplorerPage/SearchBar/SearchBarComponent";
import ProfilePopUp from "../screens/ExplorerPage/ProfilePopUp/ProfilePopUp";
import GeneralWellnessGroups from "../screens/ExplorerPage/GeneralWellnessGroups/GeneralWellnessGroups";
import YourFriendsIcon from "../screens/ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";

export default function HomeScreen() {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({ headerShown: false });
  // }, [navigation]);

  // const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <ProfilePopUp isVisible={modalVisible} setVisible={setModalVisible} />

      <View style={styles.Container2}>
        <SearchBarComponent />
      </View>

      <Text style={styles.MotivationalQuote}>"Have laughable dreams!"</Text>
      <ScrollView>
        <View style={{ backgroundColor: "white", height: "120%", top: 20 }}>
          <GeneralWellnessGroups />
        </View>
      </ScrollView>
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
    paddingBottom: 90,
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
