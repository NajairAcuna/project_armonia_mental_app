import React, { useEffect, useState } from "react"
import { SearchBar } from '@rneui/themed';
import {
  Alert,
  Modal,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  SwitchComponent,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Link, router } from "expo-router";



//        <Icon name="home" size={40} color={"#67e26d"}></Icon>

export default function HomeIcon() {
    return(
        <View>
            <Link href={"../ExplorerPage/ExplorerPageScreen"}>
            <Icon name="home" size={40} color={"#13A95F"}></Icon>
            </Link>
        </View>
    )
}