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
import TrophyButton from "./TrophyButton/TrophyButton";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, useNavigation } from "expo-router";


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
      {/* <TrophyButton/> */}
      <Link style={styles.FriendsIcon} href="screens/YourFriends/YourFriendsScreen">
      <Icon name="user"></Icon>
      </Link>
    </View>
  );
  };


const styles = StyleSheet.create({
view: {
  
},
FriendsIcon: {

},
MotivationalQuote: {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 30,
},
Container1: {
  backgroundColor: "#00e30b"
},
Container2: { 
  flex: 1,
  flexDirection: "row"
}
});
