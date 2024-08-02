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
          <Text style={{top: 425, textAlign: 'center', fontSize: 40, color: 'grey'}}>Or</Text>
        </View>
        <View style={{top: 240,borderWidth: 3, width: 350, alignSelf: 'center', paddingVertical: 45, borderRadius: 25, backgroundColor: "#8CDE90", borderColor: '#8CDE90', borderBottomColor: '#449B49', borderBottomWidth: 10}}>
          <TouchableOpacity  onPress={openModal}>
          <Text style={{top: 5, textAlign: 'center', fontSize: 30, color: '#449B49', }}>Day reflection</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <View style={styles.ModalContainer}>
            <View style={styles.modalContent}>
              <Text style={{color: 'white', fontSize: 25}}>are you sure you want to use this prompt?</Text>
              <TouchableOpacity style={{}}>
                <Link style={{top: 50, left: -40, borderWidth: 1, alignSelf: 'center',width: '25%',height: '35%', backgroundColor: '#6BD29F'}} href={''}>
                <Text style={{textAlign: 'center'}} >Yes</Text>
                </Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={{textAlign: 'center'}}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          </Modal>
        </View>
        <View style={{ borderWidth: 3,alignSelf: 'center', width: 350,  paddingVertical: -40, borderRadius: 25, top: 310, backgroundColor: "#1C6F9D", borderColor: '#1C6F9D',borderBottomColor: '#013856', borderBottomWidth: 10  }}> 
        <Text style={{top: 55,textAlign: 'center', fontSize: 30, color: '#013856'}}>Think about loved ones</Text>
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
    borderWidth: 2, borderRadius: 10, alignSelf: 'flex-start', top: 535, backgroundColor: 'white', left: 10
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
      top: 300,
      justifyContent: "space-evenly",
      left: -30,
      flexDirection: "row",
      backgroundColor: "#065064",
      paddingBottom: 50,
      borderWidth: 8,
      borderColor: "#065064",
      width: '120%'
    },
    ModalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ModalText: {
      color: 'white',
      fontWeight: 'bold'
    },
    closeButton: {
      margin: 10,
      alignSelf: 'flex-end',
      left: -50,
      borderWidth: 1,
      top: -37,
      backgroundColor: '#6BD29F',
      width: '25%',
      height: '12%',
    },
    modalContent: {
      backgroundColor: '#1EA060',
      padding: 15,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: '#1EA060',
      height: "30%",
      width: '80%',
      borderBottomColor: '#1A7246'
      
    },
})
