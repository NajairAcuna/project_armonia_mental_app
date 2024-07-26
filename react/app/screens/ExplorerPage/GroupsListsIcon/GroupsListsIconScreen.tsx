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
import Icon from "react-native-vector-icons/FontAwesome5";

export default function GroupListsIcon() {
    return(
        <View>
            <Link href={"../GroupLists/GroupListsScreen"}>
            <Icon name="handshake" size={40} style={{color: 'white'}}></Icon>
            </Link>
        </View>
    )
}