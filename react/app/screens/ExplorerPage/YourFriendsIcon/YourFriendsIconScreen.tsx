import { Link,useNavigation } from "expo-router";
import React, { useEffect, useState } from "react"
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
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function YourFriendsIcon() {

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return(
        <View>
            <Link href="../YourFriends/YourFriendsScreen">
          <Icon size={40} name="user" style={{color: "#13A95F", top: 5}}></Icon>
            </Link>
        </View>
    )
}

function setModalVisible(arg0: boolean) {
    throw new Error("Function not implemented.");
}
