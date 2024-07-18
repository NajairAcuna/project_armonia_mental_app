import { useNavigation } from "expo-router";
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


export default function YourFriends() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);
    return(
        <View>
            <Icon name="user"></Icon>
            <text> Friend Name</text>
        </View>
    )
}

const styles = StyleSheet.create({
view: {
  
}

});