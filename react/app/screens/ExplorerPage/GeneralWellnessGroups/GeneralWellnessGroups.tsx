import React, { Component } from "react";
import { SearchBar } from "@rneui/themed";
import { Link, router } from "expo-router";
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
  BackHandler,
  ViewStyle,
  Pressable,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function GeneralWellnessGroups() {
  const wellnessGroups = [
    {
      id: 1,
      imageSource: require("@/assets/images/icons/loss_group_icon.png"),
      title: "Coping With Loss",
      description: "Have you lost someone? Come and talk about it",
    },
    {
      id: 2,
      imageSource: require("@/assets/images/icons/stress_group_icon.png"),
      title: "Managing Stress",
      description: "Learn techniques to manage and reduce stress",
    },
    {
      id: 3,
      imageSource: require("@/assets/images/icons/fitness_group_icon.png"),
      title: "Fitness and Wellness",
      description: "Join us for fitness and wellness activities",
    },
    // Add more objects as needed
  ];

  return (
    // <View style={{ alignItems: "center" }}>

    //   <View style={styles.groupContainer}>
    //     <Image
    //       source={require("@/assets/images/icons/loss_group_icon.png")}
    //       style={{ width: 118, height: 111, left: 20, top: 30 }}
    //     />
    //     <View style={styles.textContainer}>
    //       <Text style={styles.title}>Copying With Loss</Text>
    //       <Text style={styles.description}>
    //         Have you lost someone? Come and talk about it
    //       </Text>
    //     </View>
    //   </View>
    //   </View>
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={wellnessGroups}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.groupContainer}>
            <Image
              source={item.imageSource}
              style={{ width: 118, height: 111, left: 20, top: 30 }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const separatorStyles: ViewStyle = {
  height: 5,
  width: "50%",
  backgroundColor: "#FFFFFF",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  groupText: {
    flex: 5,
  },
  view: {},
  ImageGroup: {
    width: 90,
    height: 80,
  },
  groupContainer: {
    borderRadius: 25,
    borderWidth: 0,
    borderColor: "#000",
    backgroundColor: "rgba(129, 221, 241, 0.32)",
    shadowColor: "#DADADA",
    shadowOffset: { width: 6, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 16,
    elevation: 5, // For Android shadow
    width: 344,
    height: 171,
    flexDirection: "row",
  },
  textContainer: {
    // flex: 1,
    marginLeft: 20,
    maxWidth: 200, // Adjust this value as needed
    flexDirection: "column",
    // padding: 5,
    // right: 0,
    position: "absolute",
    top: 30,
    right: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // flexShrink: 1,
    flexWrap: "wrap",
    textAlign: "center",
    // top: 30,
  },
  description: {
    fontSize: 14,
    // flexShrink: 1,
    flexWrap: "wrap",
    top: 20,
    // right: 10,
    padding: 5,
    textAlign: "center",
  },
});
