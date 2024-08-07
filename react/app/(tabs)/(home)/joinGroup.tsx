import { Link, useNavigation, useLocalSearchParams } from "expo-router";
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

export default function JoinGroupScreen() {
  const { groupTitle, groupDescription, image } = useLocalSearchParams();

  return (
    <View>
      <TopBar title={"Join Safe Space"} />
      <View style={styles.groupDescContainer}>
        <Image source={image} style={styles.groupImage} />
        <Text style={styles.titleStyle}>{groupTitle}</Text>
        {/* <Text>Public Group</Text> */}
        <Text style={styles.membersStyle}>Members: 8</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About:</Text>
        <Text style={styles.aboutText}>{groupDescription}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinText}>Join Group</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  joinButton: {
    backgroundColor: "#055065",
    width: 192,
    height: 81,
    borderRadius: 25,
    justifyContent: "center",
  },
  joinText: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    fontWeight: 400,
  },
  buttonContainer: {
    alignItems: "center",
    // justifyContent: "center",
    // marginTop: 50,
  },

  aboutContainer: {
    width: 340,
    height: 175,
    backgroundColor: "#055065",
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    marginBottom: 60,
  },
  aboutText: {
    fontSize: 25,
    fontWeight: 400,
    color: "white",
  },
  aboutTitle: {
    fontSize: 30,
    fontWeight: 400,
    color: "white",
    marginBottom: 10,
  },

  groupImage: {
    height: 114,
    width: 114,
  },
  groupDescContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  titleStyle: {
    marginTop: 10,
    fontSize: 32,
    color: "#055065",
  },
  membersStyle: {
    fontSize: 25,
    color: "#055065",
    marginTop: 10,
  },
});
