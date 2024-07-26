import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, View, Modal, TextInput } from "react-native";
import { Link } from "expo-router";
import axios from "axios";
import LoginPopUp from "../screens/Login/LoginPopUpScreen";
import { LinearGradient } from "expo-linear-gradient";



// import { HelloWave } from "@/components/HelloWave";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const testFunction = () => {
    alert("Sign Up");
  };

  const [text, putUser] = React.useState("User ID:");
  const [text2, putEmail] = React.useState("Email:");
  const [text3, putPassword] = React.useState("Password:");

  return (
    <LinearGradient 
    colors={['#003855','#065064','#017260','#13aa5f','#67e260']} 
    style={styles.Gradient}
    start={{x:0, y: 0.2}}
    end={{x: 1,y:1 }}>
    <View style={styles.create}>
      <Image source={{uri: 'https://i.postimg.cc/76Gry0rN/Yudalogo.png'}} style={{width: 360, height: 167, top: 100, }}/>
      <Text style={styles.motoYuda}>
          a place where you can grow
      </Text>
      <View>
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
      </View>

      {/* <Button title="Log In" color="grey" /> */}
      <Link href="/screens/ExplorerPage/ExplorerPageScreen" asChild>
        {/* <Pressable onPress={testFunction}> */}
        <Text style={styles.title}>Login</Text>
        {/* </Pressable> */}
      </Link>
      <Text style={styles.newAccount
      }>
      Create new account
      </Text>
      {/* <Button title="Sign In" onPress={testFunction} /> */}
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
    textAlign: "center",
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 10,
    borderColor: "#67e26d",
    borderRadius: 20,
    backgroundColor: "#67e26d",
    color: "#13aa5f",
    fontSize: 30,
    fontWeight: "bold",
    top: 280,
    textDecorationColor: '#13aa5f'
  },
  Gradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  textInputs: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    top: 250,
    backgroundColor: "white"
  },
  motoYuda: {
    top: 100,
    textAlign: 'center',
    color: '#67e26d'
  },
  newAccount: {
    top: 295,
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  }
});
