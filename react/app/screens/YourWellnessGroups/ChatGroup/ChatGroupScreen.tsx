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
import svg, { Circle } from 'react-native-svg';
import GroupListsIcon from "../../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../../ExplorerPage/HomeIcon/HomeScreenIcon";
import WhatAreYouFeelingIconScreen from "../../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import YourFriendsIcon from "../../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";

export default function ChatGroup() {

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    const [text, onChangeText] = React.useState('');

    return(
        <View style={{backgroundColor:'#a6fba1' }}>
            <Text style={{top: 0, alignSelf: "center", fontSize: 30, backgroundColor: '#003855', paddingHorizontal: 150, paddingVertical: 30, paddingTop: 30}}>(Group name)</Text>
            <View style={styles.IconsChat}>
                <View style={{borderWidth: 1, flexDirection: 'column', alignSelf: "center", right: 172, backgroundColor: '#003855', top: -100}}>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                </View>
            </View>
            <View>
                <TextInput          
                style={styles.TextBox} 
                onChangeText={onChangeText}
                editable={true} 
                multiline={true}
                value={text}/>
            </View>
            <View style={{top: 10}}>
             <Icon style={{left: 320, bottom: 70}} name="user" size={50}></Icon>
             <Text style={{top: -100, left: 180}}>blah blah blah blah</Text>
             <Icon style={{left: 94, bottom: 200}} name="user" size={50}></Icon>
             <Text style={{left: 160, top: -230}}>Blah blah blah blah?</Text>
             <Icon style={{left: 94, bottom: 380}} name="user" size={50}></Icon>
             <Text style={{left: 158, top: -410}}>Blah blah blah blah  blah  blah blah</Text>
             <Icon style={{left: 94, bottom: 645}} name="user" size={50}></Icon>
             <Text style={{left: 160, top: -670}}>Blah blah blah blah  blah  blah blah</Text>
             <Text style={{left: 160, top: -670}}>Blah blah blah blah  blah  blah blah</Text>
            </View>
            <View style={styles.BackButton}>
            <YourFriendsIcon/>
             <HomeIcon/>
            <WhatAreYouFeelingIconScreen/>
            <GroupListsIcon/>
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
        top: 10,
        justifyContent: "space-evenly",
        left: 0,
        flexDirection: "row",
        backgroundColor: "#065064",
        paddingBottom: 20,
        borderWidth: 8,
        borderColor: "#065064"
    },
    TextBox: {
        borderWidth: 1,
        padding: 10,
        paddingStart: 3,
        width: 250,
        left: 90,
        top: 50,
        backgroundColor: "white"
        }
  });