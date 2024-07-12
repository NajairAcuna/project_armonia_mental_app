import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const testFunction = () => {
    alert("Sign Up");
  };

  return (
    <View style={styles.create}>
      <Pressable>
        <Text style={styles.title} selectable={true} selectionColor="orange">
          Log In
        </Text>
      </Pressable>
      {/* <Button title="Log In" color="grey" /> */}
      <Link href="/screens/SignUp/SignUpScreen" asChild>
        {/* <Pressable onPress={testFunction}> */}
        <Text style={styles.title}>Sign Up</Text>
        {/* </Pressable> */}
      </Link>

      {/* <Button title="Sign In" onPress={testFunction} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  create: {
    flex: 5,
    padding: 20,
    backgroundColor: "#eaeaea",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 6,
    borderColor: "#20232a",
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  // titleContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: "absolute",
  // },
});
