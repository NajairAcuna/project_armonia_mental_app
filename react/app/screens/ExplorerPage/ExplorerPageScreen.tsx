import React, { useState } from "react"
import { SearchBar } from '@rneui/themed';
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
import SearchBarComponent from "./SearchBar/SearchBarComponent";
import GeneralWellnessGroups from "./GeneralWellnessGroups/GeneralWellnessGroups";
import Icon from 'react-native-vector-icons/FontAwesome';
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function ExplorerPage() {
  
  return (
    <View>
      <SearchBarComponent/>
      <Icon name="user" size={30} color="black"></Icon>
      <GeneralWellnessGroups/>
    </View>
  );
  };


const styles = StyleSheet.create({
view: {
  margin: 10,
}


 
});
