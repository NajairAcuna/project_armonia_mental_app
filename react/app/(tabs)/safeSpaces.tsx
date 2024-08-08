import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
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
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "expo-linear-gradient";
import TopBar from "@/components/TopBar";

export default function SafeSpacesScreen() {
  const friendsData = [
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "John Doe",
    },
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Jane Smith",
    },
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Alice Johnson",
    },
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Bob Brown",
    },
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Mario Cortez",
    },
    {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Luis Miguel",
    },
    // Add more objects as needed
  ];

  return (
    <View>
      <TopBar title={"Safe Spaces"} />
      <Image
        source={require("@/assets/images/groupChat.png")}
        style={{
          width: 367,
          resizeMode: "contain",
          position: "absolute",
          right: 0,
          top: -230,
        }}
      />
      <View style={styles.leftChatBar}>
        <Image
          source={require("@/assets/images/icons/fitness_group_icon.png")}
          style={styles.leftIcons}
        />
        <Image
          source={require("@/assets/images/icons/loss_group_icon.png")}
          style={[styles.leftIcons, styles.leftIcon2]}
        />
        <Image
          source={require("@/assets/images/icons/academic_groupChat_icon.png")}
          style={[styles.leftIcons, styles.leftIcon3]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  friendContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: 400,
    marginBottom: 10, // Add some space between items
  },
  image: {
    width: 61,
    height: 61,
    borderRadius: 30,
    marginRight: 30,
  },
  name: {
    fontSize: 30,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
  icon: {
    width: 43,
    height: 45,
  },
  leftChatBar: {
    width: 85,
    backgroundColor: "#30B18A",
    height: "100%",
    flexDirection: "column",
  },
  leftIcons: {
    width: 50,
    height: 50,
    // position: "absolute",
    left: 17,
    top: 20,
    borderRadius: 15,
  },
  leftIcon2: {
    // position: "absolute",
    left: 17,
    top: 50,
  },
  leftIcon3: {
    top: 80,
    borderRadius: 0,
  },
});
