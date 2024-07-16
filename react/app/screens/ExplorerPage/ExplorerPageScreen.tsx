import React, { useState } from "react"
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

export default function ExplorerPage() {


  return (
    <View>
      <SearchBarComponent/>
      <ProfilePopUp/>
      <GeneralWellnessGroups/>
    </View>
  );
  };


const styles = StyleSheet.create({
view: {
  margin: 10,
}
});
