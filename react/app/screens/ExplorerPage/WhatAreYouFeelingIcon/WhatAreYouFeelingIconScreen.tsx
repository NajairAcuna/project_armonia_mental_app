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
        <View>
            <Link href="../WhatAreYouFeeling/WhatAreYouFeelingScreen">
         <Icon name="plus" size={40}></Icon>
            </Link>
            <View></View>
        </View>
    ) 
}