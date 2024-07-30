import React, { useState, useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
// import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
// import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
// import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
// import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
// import HomeIconButton from "../ExplorerPage/HomeIcon/HomeScreenIcon";
// import ProfilePopUp from "../ExplorerPage/ProfilePopUp/ProfilePopUp";

export default function CreateGroup(){
  const [text, onChangeText] = React.useState('');
  const [text2, description] = React.useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [navigation]);

  return(
    <View>
      <Text style={{textAlign: 'center', top: 100, fontSize: 40}}>Group name</Text>
      <TextInput 
       style={styles.input}
       onChangeText={onChangeText}
       value={text}
      />
      <View>
      <Text style={{textAlign: 'center', top: 150, fontSize: 40}}>Group Description</Text>
      <TextInput
       style={styles.input}
        onChangeText={description}
        value={text2}
      />
      </View>
      <Text style={{textAlign: 'center', top: 295, fontSize: 30, borderWidth: 1, alignSelf: 'center', borderRadius: 15,}}>Create group</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    left: 74,
    width: 255,
    height: 30,
    borderWidth: 1,
    padding: 35,
    top: 10,
    borderRadius: 20, 
    color: 'black'
  }
  
});