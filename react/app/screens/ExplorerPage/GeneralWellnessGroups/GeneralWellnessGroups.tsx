import React, { Component } from 'react';
import { SearchBar } from '@rneui/themed';
import { Link } from "expo-router";
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
  BackHandler,
  ViewStyle,
  Pressable,
} from "react-native";
import { BackgroundImage } from '@rneui/base';

export default function GeneralWellnessGroups() {
    return(
      <View style={{flex: 1, flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
       <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10}}>
        <Link href="/screens/YourWellnessGroups/YourWellnessGroups">
       <Text style={{textAlign: 'right'}}>about: hello, this group is open up about....</Text>
       <Text style={{textAlign: 'right'}}>(Group Name)</Text>
       </Link>
        </View>
        <Separator/>     
        <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10}}>
       <Text style={{textAlign: 'right',}}>about: hello, this group is open up about....</Text>
       <Text style={{textAlign: 'right',}}>(Group Name)</Text>
        </View>
      </View>
    ) 
}

const separatorStyles: ViewStyle = {
  height: 5,
  width: "50%",
  backgroundColor: '#FFFFFF',
}

const Separator = () => <View style={separatorStyles}/>;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    groupText: {
      flex: 5,
    },
  });