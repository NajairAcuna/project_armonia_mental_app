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
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExplorerPage() {
  const [modalVisible, setModalVisible] = useState(false);


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
