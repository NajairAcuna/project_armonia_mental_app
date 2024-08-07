import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import SearchBarComponent from "../../screens/ExplorerPage/SearchBar/SearchBarComponent";
import ProfilePopUp from "../../../components/ProfilePopUp";
import GeneralWellnessGroups from "../../screens/ExplorerPage/GeneralWellnessGroups/GeneralWellnessGroups";
import YourFriendsIcon from "../../screens/ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";

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
        {/* <SearchBarComponent /> */}
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={require("@/assets/images/icons/avatar_icon.png")}
            style={{ width: 67, height: 67 }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.MotivationalQuote}>"Have laughable dreams!"</Text>
      {/* <ScrollView style={{ backgroundColor: "white" }}> */}
      {/* <View style={{ top: 50 }}> */}
      <GeneralWellnessGroups />
      {/* </View> */}
      {/* </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
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
    position: "absolute",
    top: 70,
    left: 50,
    color: "white",
  },
  Container2: {
    // flex: -1,
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    backgroundColor: "#065064",
    // paddingBottom: 90,
    // paddingLeft: 25,
    // paddingRight: 26,
    // borderWidth: 4,
    // borderColor: "#065064",
    height: 146,
  },
  Gradient: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    position: "absolute",
    right: 20,
    top: 55,
  },
});
