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
} from "react-native";
import {Link, useNavigation } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";


export default function WellnessGroups() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({headerShown: false});

  }, [navigation]);
  return (
    <View style={{backgroundColor: '#065064', paddingBottom: 600}}>
      <Text style={{top: 49, fontSize: 35, alignSelf: "center", paddingTop: 20,paddingBottom: 20, borderWidth: 0,color: "white"}}>Depression AF</Text>
      <Text style={{fontSize: 35, top: 55, left: 105, color: "white"}}>Members: 9 </Text>
      <Text style={{fontSize: 35, top: 70 ,fontWeight: 'bold', left: 10, color: "white"}}>About:</Text>
      <Text style={{top: 70, fontSize: 20, right: -10, color: "white"}}> Hello, this group is to open up about depression and try to help deal with hope to see you in here.</Text>
      <View style={{alignSelf: "center", top: 96, left: 90, borderWidth: 2, paddingTop: 5, paddingBottom: 5, paddingLeft: 30, paddingRight: 30, width: 120, backgroundColor: '#017260'  }}>
      <Link href="../YourWellnessGroups/ChatGroup/ChatGroupScreen">
      <Text style={{alignSelf: "center", top: 140, fontSize: 25, left: -90, borderWidth: 2, paddingTop: 5, paddingBottom: 5, paddingLeft: 30, paddingRight: 30, backgroundColor: '#017260' }}>Join</Text>
      </Link>
      </View>
      <View style={styles.BackButton}>
      <Link href={"../ExplorerPage/ExplorerPageScreen"}>
      <Icon name='arrow-left' size={90} color={'#003855'}></Icon>
      </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  BackButton: {
      borderWidth: 0, borderRadius: 60, alignSelf: 'flex-start', top: 400, color: "#003855"
  },
  Gradient: {

  },
});

