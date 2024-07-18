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

export default function GeneralWellnessGroups() {
    return(
      <View style={{flex: 1, flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
       <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10, marginTop: 90, borderWidth: 5}}>
        <Link href="/screens/YourWellnessGroups/YourWellnessGroupsScreen">
       <Text style={{textAlign: 'right'}}>about: hello, this group is open up about....</Text>
       </Link>
       <Text style={{textAlign: 'right', top: 70}}>(Group Name)</Text>
       
        </View>
        <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10, marginTop: 50, borderWidth: 5}}>
       <Text style={{textAlign: 'right'}}>about: hello, this group is open up about....</Text>
       <Text style={{textAlign: 'right', top: 70}}>(Group Name)</Text>
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
      marginTop: 100
    },
    groupText: {
      flex: 5,
    },
    view: {
    }
  });