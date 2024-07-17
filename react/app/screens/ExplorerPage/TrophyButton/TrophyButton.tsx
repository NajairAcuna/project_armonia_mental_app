import React, { useState } from "react"
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
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TrophyButton() {
    return(
        <View>
          <Icon style={styles.TrophyIcon} size={30} name="trophy"></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
  TrophyIcon: {
    marginLeft: 300,
    }
  });
  