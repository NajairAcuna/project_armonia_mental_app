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
import GroupListsIcon from "../../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import WhatAreYouFeelingIconScreen from "../../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import YourFriendsIcon from "../../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
import ProfilePopUp from "../../../../components/ProfilePopUp";
import HomeIcon from "app/screens/ExplorerPage/HomeIcon/HomeScreenIcon";

export default function CreateGroup(){
  const [text, onChangeText] = React.useState('');
  const [text2, description] = React.useState('');

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [navigation]);

  return(
    <View>
      <View style={{backgroundColor: '#065064', height: "16%"}}>
        <Text style={{left: 30, top: 50, color:"white", fontSize: 25}}>Create new safe space</Text>
        <View style={{left: 130, bottom: 45}}>
        <ProfilePopUp/>
        </View>
      </View>
      <Text style={{textAlign: 'center', top: 165, fontSize: 30}}>Group name</Text>
      <TextInput 
       style={styles.input}
       onChangeText={onChangeText}
       value={text}
      />
      <View>
      <Text style={{textAlign: 'center', top: 195, fontSize: 30, }}>Group Description</Text>
      <TextInput
       style={styles.input2}
        onChangeText={description}
        value={text2}
      />
      <View style={styles.IconsForBar}>
        <YourFriendsIcon />
        <HomeIcon />
        <WhatAreYouFeelingIconScreen />
        <GroupListsIcon />
      </View>
      </View>
      <Image style={{width: "25%", height: '12%', top: -210, alignSelf: 'center', borderWidth: 1}} source={{uri:'https://i.postimg.cc/kX3NCNTc/Avatar-16-512.webp'}}/>
      <View>
      <View style={{backgroundColor: "#065064", width: "45%", height: "23%", alignSelf: 'center', top: 130, borderRadius: 120, borderWidth: 2, borderColor: 'grey'}}></View>
      <Text style={{alignSelf: 'center', top: 87, fontSize: 30,color: 'white'}}>Create Group</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    left: 74,
    width: 250,
    height: 30,
    borderWidth: 1,
    padding: 35,
    top: 170,
    borderRadius: 20, 
    color: 'black'
  },
  input2: {
    left: 74,
    width: 255,
    height: 30,
    borderWidth: 1,
    padding: 35,
    top: 200,
    borderRadius: 20, 
    color: 'black'
  },
  IconsForBar: {
    top: 448,
    justifyContent: "space-evenly",
    left: 0,
    flexDirection: "row",
    backgroundColor: "#065064",
    paddingBottom: 20,
    borderWidth: 4,
    borderColor: "#065064",
  },
  
});