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
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

import { Link,useNavigation } from "expo-router";
import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
import ProfilePopUp from "../ExplorerPage/ProfilePopUp/ProfilePopUp";

export default function WhatAreYouFeeling() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true);
    }

    const closeModal = () => {
      setModalVisible(false);
    }
    
    return(
      <View style={{backgroundColor:"#065064", top: -165, height: "35%"}}>
        <Text style={{top:220, fontSize: 35, left: 10, color: 'white'}}>Prompt Choice</Text>
        <View style={{left: 120, top: 115}}>
        <ProfilePopUp/>
        </View>
        <View>
         <Text style={{top: 245, fontSize: 25, textAlign: 'center'}}>Choose a prompt to write about</Text>
        </View>
        <View>
          <Text style={{top: 425, textAlign: 'center', fontSize: 40}}>Or</Text>
        </View>
        <View style={{top: 240,borderWidth: 3, width: 350, alignSelf: 'center', paddingVertical: 45, borderRadius: 25, backgroundColor: "#8CDE90"}}>
          <TouchableOpacity>
          <Text style={{top: 5, textAlign: 'center', fontSize: 30}}>Day reflection</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
          >
          </Modal>
        </View>
        <View style={{ borderWidth: 3,alignSelf: 'center', width: 350,  paddingVertical: -40, borderRadius: 25, top: 310, backgroundColor: "#013856" }}>
        <Text style={{top: 55,textAlign: 'center', fontSize: 30, color: 'white'}}>Think about loved ones</Text>
          <View>

          </View>
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
    borderWidth: 2, borderRadius: 10, alignSelf: 'flex-start', top: 530, backgroundColor: 'white', left: 10
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
      top: 280,
      justifyContent: "space-evenly",
      left: -30,
      flexDirection: "row",
      backgroundColor: "#065064",
      paddingBottom: 50,
      borderWidth: 8,
      borderColor: "#065064",
      width: '120%'
    },
})
