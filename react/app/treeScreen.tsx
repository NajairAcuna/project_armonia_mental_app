import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link, router, useNavigation } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";
import TopBar from "@/components/TopBar";

export default function TreeScreen() {
  return (
    <View>
      <TopBar title={"My Forest"} />
      <View style={{ backgroundColor: "#0fbea2", height: "100%" }}>
        <Image
          source={require("@/assets/images/final_tree.png")}
          style={{ alignSelf: "center", width: 380, height: 380, top: 80 }}
        />
        <Text
          style={{
            color: "#065064",
            fontSize: 40,
            textAlign: "center",
            top: 120,
          }}
        >
          Bonsai Tree
        </Text>
        <Text
          style={{
            color: "#065064",
            fontSize: 25,
            textAlign: "center",
            top: 130,
          }}
        >
          Number of days:
        </Text>
        <Text
          style={{
            color: "#065064",
            fontSize: 35,
            textAlign: "center",
            top: 150,
          }}
        >
          21
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  create: {
    flex: 5,
    padding: 20,
    // backgroundColor: rgb(0,56,85),
    // backgroundColor: linear-gradient(180deg, rgba(0,56,85,1) 0%, rgba(6,80,100,1) 20%, rgba(1,114,96,1) 45%, rgba(19,170,95,1) 75%, rgba(103,226,96,1) 100%);
  },
  title: {},
  Gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  textInputs: {
    // height: 40,
    borderWidth: 1,
    padding: 14,
    top: 250,
    backgroundColor: "white",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    color: "#B0B0B0",
    fontSize: 25,
    fontWeight: "400",
    borderColor: "#B0B0B0",
  },
  motoYuda: {
    top: 100,
    textAlign: "center",
    color: "#67e26d",
  },
  newAccount: {
    top: 295,
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  textInputs2: {
    borderWidth: 1,
    padding: 14,
    top: 250,
    backgroundColor: "white",
    color: "#B0B0B0",
    fontSize: 25,
    fontWeight: "400",
    borderEndStartRadius: 10,
    borderEndEndRadius: 10,
    borderColor: "#B0B0B0",
  },
});
