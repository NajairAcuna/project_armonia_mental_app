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
} from "react-native";
import SearchBarComponent from "./SearchBar/SearchBarComponent";
import GeneralWellnessGroups from "./GeneralWellnessGroups/GeneralWellnessGroups";
import ProfilePopUp from "./ProfilePopUp/ProfilePopUp";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Link, useNavigation } from "expo-router";
import YourFriends from "../YourFriends/YourFriendsScreen";
import YourFriendsIcon from "./YourFriendsIcon/YourFriendsIconScreen";
import WhatAreYouFeelingIconScreen from "./WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import GroupListsIcon from "./GroupsListsIcon/GroupsListsIconScreen";
import { color } from "@rneui/base";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
// import { Animated } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import HomeIcon from "./HomeIcon/HomeScreenIcon";
import HomeIconButton from "./HomeIcon/HomeScreenIcon";





export default function ExplorerPage() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [navigation]);
  // const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  return (

    <View  style={{backgroundColor:"white", paddingBottom: 540}}>

      <View style={styles.Container2}>
        <SearchBarComponent/>
        <ProfilePopUp/>
      </View>
   
      <Text style={styles.MotivationalQuote}>"Have laughable dreams!"</Text> 
      <GeneralWellnessGroups/>
      <View style={styles.IconsForBar}>
      <YourFriendsIcon/>
      <HomeIcon/>
      <WhatAreYouFeelingIconScreen/>
      <GroupListsIcon/>
      </View>
    </View>
  
  );
  };


const styles = StyleSheet.create({
view: {
  
},
IconsForBar: {
  top: 580,
 justifyContent: "space-evenly",
 left: 1,
 flexDirection: "row",
 backgroundColor: "#065064",
 paddingBottom: 80,
 borderWidth: 4,
 borderColor: "#065064"
},
MotivationalQuote: {
  textAlign: 'center',
  fontFamily: 'AveriaSerif-Light',
  fontSize: 25,
  top: -50,
  color: 'white'
},
Container2: { 
  flex: -1,
  flexDirection: "row",
  justifyContent: "space-evenly",
  backgroundColor: "#065064",
  paddingBottom: 100,
  paddingLeft: 25,
  paddingRight: 26,
  borderWidth: 4,
  borderColor: "#065064"
},
Gradient: {
  alignItems: 'center',
  justifyContent: 'center',},
});
