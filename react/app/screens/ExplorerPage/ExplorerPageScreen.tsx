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



export default function ExplorerPage() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [navigation]);

  return (
    <View>
      <View style={styles.Container2}>
        <SearchBarComponent/>
        <ProfilePopUp/>
      </View>

      <Text style={styles.MotivationalQuote}>Motivational Quote</Text> 
      <GeneralWellnessGroups/>
      <View style={styles.IconsForBar}>
      <YourFriendsIcon/>
      <WhatAreYouFeelingIconScreen/>
      <Icon name="handshake" size={40}></Icon>
      </View>
    </View>
  );
  };


const styles = StyleSheet.create({
view: {
  
},
IconsForBar: {
  top: 670,
 justifyContent: "space-evenly",
 left: 10,
 flexDirection: "row",
},
MotivationalQuote: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
  top: 70

},
Container2: { 
  flex: -1,
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-evenly"
  // backgroundColor: "#00e30b"
}
});
