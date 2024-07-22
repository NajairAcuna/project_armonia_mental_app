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
import {Link, useNavigation } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { avatarSizes } from "@rneui/base/dist/Avatar/Avatar";
import { Line } from "react-native-svg";




export default function ChatGroup() {

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    const [text, onChangeText] = React.useState('');

    return(
        <View>
            <Text style={{top: 60, alignSelf: "center", fontSize: 30}}>(Group name)</Text>
            <View style={styles.IconsChat}>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>
                <Icon name="user" size={75}></Icon>

            </View>
            <View>
                <TextInput style={styles.TextBox} onChangeText={onChangeText} value={text}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    IconsChat: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        top: 100,
        left: 7,
    },
    BackButton: {
        borderWidth: 5, borderRadius: 60, alignSelf: 'flex-start', top: 400 
    },
    TextBox: {
        height: 30,
        borderWidth: 1,
        alignSelf: 'center',
        paddingLeft: 160,
        paddingRight: 90,
        left: 40,
        top: 100

        }
  });