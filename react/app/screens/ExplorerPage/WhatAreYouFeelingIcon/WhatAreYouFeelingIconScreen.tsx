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
import Icon from "react-native-vector-icons/FontAwesome";

export default function WhatAreYouFeelingIconScreen() {
    return(
        <View style={{backgroundColor: "#67e26d", borderWidth: 10, borderColor: '#67e26d', borderRadius: 360, top: 5}}>
            <Link href="../WhatAreYouFeeling/WhatAreYouFeelingScreen">
         <Icon name="plus" size={20} ></Icon>
            </Link>
            <View></View>
        </View>
    ) 
}