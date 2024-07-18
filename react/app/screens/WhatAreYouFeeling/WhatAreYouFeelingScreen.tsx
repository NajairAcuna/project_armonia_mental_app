import React, { useEffect, useState } from "react"
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
import { Link,useNavigation } from "expo-router";

export default function WhatAreYouFeeling() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);
    
    return(
        <View>
            <Text style={{textAlign: "center", fontSize: 40, top: 50}}>So, how are you feeling?</Text>
            <Text></Text>
        </View>
    )
}

