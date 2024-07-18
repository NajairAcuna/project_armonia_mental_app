import React, { useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Link, useNavigation } from "expo-router";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SignUpScreen() {
  const [text, putUser] = React.useState("User ID:");
  const [text2, putEmail] = React.useState("Email:");
  const [text3, putPassword] = React.useState("Password:");

    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [navigation]);

  return (
    <SafeAreaView style={styles.create}>
      <TextInput
        style={styles.textInputs}
        onChangeText={putUser}
        value={text}
      />
      <TextInput
        style={styles.textInputs}
        onChangeText={putEmail}
        value={text2}
      />
      <TextInput
        style={styles.textInputs}
        onChangeText={putPassword}
        value={text3}
      />
      <Link href="/screens/ExplorerPage/ExplorerPageScreen" asChild>
        <Text style={styles.title} selectable={true} selectionColor="orange">
          Sign Up
        </Text>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  create: {
    flex: 5,
    padding: 20,
    backgroundColor: "#eaeaea",
    marginBottom: 60
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

  textInputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
