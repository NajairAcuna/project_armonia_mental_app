import { useNavigation } from "expo-router";
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
  Modal,
  ImageBackground,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProfilePopUp from "../../ExplorerPage/ProfilePopUp/ProfilePopUp";
import GroupListsIcon from "../../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../../ExplorerPage/HomeIcon/HomeScreenIcon";
import WhatAreYouFeelingIconScreen from "../../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import YourFriendsIcon from "../../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";


export default function Journal(){
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);
    return(
        <View style={{backgroundColor: '#FFEFA7', height: 820}}>
            <View style={{backgroundColor: '#065064', height: 100, top: 0}}>
                <Text style={{left: 35, top: 50, fontSize: 35, color: 'white'}}>Journal</Text>
            </View>
            <View style={{backgroundColor: '#A09563', height: 85, borderBottomColor: '#55503C', borderWidth: 4, borderColor: '#A09563', borderTopColor: '#00293F', minHeight: 115, top: -5}}>
            <Text style={{left: 10, top: 15, color: '#55503C', fontSize: 30}}>So, how was your day?</Text>
            <Text style={{left: 5,top: 10, color: '#55503C',fontSize: 20}}>Use as much details as possible to describe what happened today</Text>
            </View>
            <Text style={{top: -10, left: 20, fontSize: 30, color: '#55503C', }}>Daily Entry</Text>
            <Text style={{top: 0, left: 20, color: '#55503C', fontSize: 25}}>type here</Text>
            <Image style={{left: 330, top: -71}}source={{uri: "https://i.postimg.cc/J0w4RKJ8/Pasted-Graphic-3.png", height: 55, width: 55}}/>
            <View style={{top: -350, left: 135}}>
            <ProfilePopUp/>
            </View>
            <View>
            <View style={styles.IconsSpaceBar}>
            <YourFriendsIcon/>
             <HomeIcon/>
            <WhatAreYouFeelingIconScreen/>
            <GroupListsIcon/>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
      IconsSpaceBar: {
        top: 400,
        justifyContent: "space-evenly",
        left: -30,
        flexDirection: "row",
        backgroundColor: "#065064",
        paddingBottom: 50,
        borderWidth: 8,
        borderColor: "#065064",
        width: '120%'
      }
  })
  