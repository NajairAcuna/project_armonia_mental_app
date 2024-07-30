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
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import { Link,useNavigation } from "expo-router";
import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";

export default function WhatAreYouFeeling() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    const [text, writeHowAreYouFeeling] = React.useState('');
    
    return(
      <View style={{backgroundColor:'#065064', paddingBottom: 460}}>
        <Text style={{textAlign: "center", fontSize: 40, top: 50, color: 'white'}}>So, how are you feeling?</Text>
        <Text style={{textAlign: "center", fontSize: 20, top: 55, color: 'white'}}>use as much detail as possible to describe what are you feeling and what is causing it</Text>
        <View style={styles.BackButton}>
        <Link href={"../ExplorerPage/ExplorerPageScreen"}>
        <Text style={{fontSize: 40}}>Finish?</Text>
        </Link>
        </View>
        <View>
          <TextInput 
          style={styles.TextBox} 
          onChangeText={writeHowAreYouFeeling}
          editable={true} 
          multiline={true}
          value={text}
          />
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
  BackButton: {
    borderWidth: 2, borderRadius: 10, alignSelf: 'flex-start', top: 530, backgroundColor: 'white' 
  },
  TextBox: {
    borderWidth: 1,
    borderColor: 'black',
    paddingStart: 0,
    width: 250,
    alignSelf: 'center',
    top: 10,
    backgroundColor: "white",
    color: 'black',
    paddingBottom: 70,
    },
    IconsSpaceBar: {
        top: 500,
        justifyContent: "space-evenly",
        left: 0,
        flexDirection: "row",
        backgroundColor: "#065064",
        paddingBottom: 50,
        borderWidth: 8,
        borderColor: "#065064",
        paddingHorizontal: 20
    },
})
