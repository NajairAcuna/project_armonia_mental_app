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
} from "react-native";
import { Link, useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

import { useLocalSearchParams } from "expo-router";

export default function WellnessGroups() {
  const navigation = useNavigation();

  const local = useLocalSearchParams();

  const aboutText = local.about;
  const titleText = local.title;
  const memberNumber = local.members;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View style={{ backgroundColor: "white", paddingBottom: 600 }}>
      <View style={{backgroundColor: "#065064", width: "100%", height: "20%"}} ></View>
      <Text
        style={{
          top: 49,
          fontSize: 35,
          alignSelf: "center",
          paddingTop: 20,
          paddingBottom: 20,
          borderWidth: 0,
          color: "white",
        }}
      >
        {titleText}
      </Text>
      <Text style={{ fontSize: 35, top: 50, left: 105, color: "black" }}>
        Members: {memberNumber}
      </Text>
      <Text
        style={{
          fontSize: 35,
          top: 70,
          fontWeight: "bold",
          left: 10,
          color: "black",
        }}
      >
        About:
      </Text>
      <Text style={{ top: 70, fontSize: 20, right: -10, color: "black" }}>
        {aboutText}
      </Text>
      <View
        style={{
          alignSelf: "center",
          top: 250,
          borderWidth: 2,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 30,
          paddingRight: 30,
          width: 120,
          backgroundColor: "#34C985",
          borderRadius: 200,
          borderColor: "#1B9E73"
        }}
      >
        
        <Link href="../GroupLists/GroupListsScreen">
          <Text
            style={{
              alignSelf: "center",
              top: 140,
              fontSize: 25,
              left: -90,
              borderWidth: 3,
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 30,
              paddingRight: 30,
              borderColor: '#34C985',
              backgroundColor: "#34C985",
              borderRadius: 10,
              color: "#1B9E73"
            }}
          >
            Join
          </Text>
        </Link>
      </View>
      <View style={{backgroundColor: "#065064", width: "100%", height: "80%", top: 299 }}>

      <View style={styles.BackButton}>

        <Link href={"../ExplorerPage/ExplorerPageScreen"}>
          <Icon name="arrow-left" size={80} color={"#003855"}></Icon>
        </Link>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BackButton: {
    borderWidth: 0,
    borderRadius: 60,
    alignSelf: "flex-start",
    top:10,
    color: "#003855",
    left: 20
  },
  Gradient: {},
});
