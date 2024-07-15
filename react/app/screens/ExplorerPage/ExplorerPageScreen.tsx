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

export default function ExplorerPage() {
  
  return (
    <View>
      <SearchBarComponent/>
      <GeneralWellnessGroups/>
    </View>
  );
  };


const styles = StyleSheet.create({
view: {
  margin: 10,
}


 
});
