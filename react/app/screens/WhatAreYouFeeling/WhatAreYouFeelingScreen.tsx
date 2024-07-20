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
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Link,useNavigation } from "expo-router";

export default function WhatAreYouFeeling() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);
    
    return(
      <View>
        <Text style={{textAlign: "center", fontSize: 40, top: 50}}>So, how are you feeling?</Text>
        <Text style={{textAlign: "center", fontSize: 20, top: 55}}>use as much detail as possible to describe what are you feeling and what is causing it</Text>
        <View style={styles.BackButton}>
        <Link href={"../ExplorerPage/ExplorerPageScreen"}>
        <Icon name='arrow-left' size={90}></Icon>
        </Link>
        </View>
      </View>
      
    )
}


const styles = StyleSheet.create({
  BackButton: {
    borderWidth: 5, borderRadius: 60, alignSelf: 'flex-start', top: 560 
  }
})
