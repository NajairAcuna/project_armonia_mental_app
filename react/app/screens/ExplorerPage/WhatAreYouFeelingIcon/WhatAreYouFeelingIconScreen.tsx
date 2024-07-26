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
        <View style={{top: 0}}>
            <Link href="../WhatAreYouFeeling/WhatAreYouFeelingScreen">
         <Icon name="book" size={40} color={"#13A95F"}></Icon>
            </Link>
            <View></View>
        </View>
    ) 
}