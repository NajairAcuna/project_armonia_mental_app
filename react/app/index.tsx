import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link, router, useNavigation } from "expo-router";
import axios from "axios";
import LoginPopUp from "./screens/Login/LoginPopUpScreen";
import { LinearGradient } from "expo-linear-gradient";

// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  // const testFunction = () => {
  //   alert("Sign Up");
  // };

  // const [text, putUser] = React.useState("User ID:");
  const [text2, putEmail] = React.useState("Email:");
  const [text3, putPassword] = React.useState("Password:");

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <LinearGradient
      colors={["#003855", "#065064", "#017260", "#13aa5f", "#67e260"]}
      style={styles.Gradient}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 1 }}
    >
      <Image
        source={require("@/assets/images/yuda_logo.png")}
        style={{ width: 253, height: 135, alignSelf: "center", top: 100 }}
      />
      <View style={styles.create}>
        <View>
          <TextInput
            style={styles.textInputs}
            onChangeText={putEmail}
            value={text2}
          />
          <TextInput
            style={styles.textInputs2}
            onChangeText={putPassword}
            value={text3}
          />
        </View>

        {/* <Button title="Log In" color="grey" /> */}
        <TouchableOpacity
          style={{
            marginTop: 10,
            paddingVertical: 4,
            // paddingHorizontal: 4,
            // borderWidth: 15,
            // borderColor: "#67e26d",
            borderRadius: 45,
            backgroundColor: "rgba(103, 226, 109, 0.50)",

            top: 280,
          }}
          // href="/screens/ExplorerPage/ExplorerPageScreen"
          onPress={() => router.replace("home")}
        >
          {/* <Pressable onPress={testFunction}> */}
          <Text
            style={{
              textAlign: "center",
              color: "rgba(1, 114, 96, 0.50)",
              fontSize: 45,
              fontWeight: "500",
            }}
          >
            log in
          </Text>
          {/* </Pressable> */}
        </TouchableOpacity>
        {/* <Text style={styles.newAccount}>Create new account</Text> */}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  create: {
    flex: 5,
    padding: 20,
    // backgroundColor: rgb(0,56,85),
    // backgroundColor: linear-gradient(180deg, rgba(0,56,85,1) 0%, rgba(6,80,100,1) 20%, rgba(1,114,96,1) 45%, rgba(19,170,95,1) 75%, rgba(103,226,96,1) 100%);
  },
  title: {
    // textAlign: "center",
    // marginTop: 10,
    // paddingVertical: 4,
    // paddingHorizontal: 4,
    // borderWidth: 10,
    // borderColor: "#67e26d",
    // borderRadius: 30,
    // backgroundColor: "#67e26d",
    // color: "#13aa5f",
    // fontSize: 30,
    // fontWeight: "bold",
    // top: 280,
    // textDecorationColor: '#13aa5f',
  },
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
