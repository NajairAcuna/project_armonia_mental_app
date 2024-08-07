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

export default function FriendsScreen() {
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
      <TopBar title={"Your Friends"} />
      <View>
        <View style={{ marginTop: 20 }}>
          {friendsData.map((friend, index) => (
            <View key={index} style={styles.friendContainer}>
              <Image source={{ uri: friend.uri }} style={styles.image} />
              <Text style={styles.name}>{friend.name}</Text>
              <TouchableOpacity style={styles.iconContainer}>
                <Image
                  source={require("@/assets/images/icons/forest_icon.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
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
});

{
  /* <Image
  source={{ uri: "https://i.postimg.cc/PxP8SMGm/Pasted-Graphic-3.png" }}
  style={{ width: 40, height: 40, backgroundColor: "#13aa5f", borderWidth: 1 }}
></Image>; */
}
