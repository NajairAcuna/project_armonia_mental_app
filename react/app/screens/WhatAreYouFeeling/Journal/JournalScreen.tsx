import { useNavigation } from "expo-router";
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
  ImageBackground,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Journal(){
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);
    return(
        <View style={{backgroundColor: '#FFEFA7', height: 852}}>
            <View style={{backgroundColor: '#065064', height: 100}}>
                <Text style={{left: 35, top: 45, fontSize: 35, color: 'white'}}>Journal</Text>
            </View>
            <View style={{backgroundColor: '#A09563', height: 80, borderBottomColor: '#55503C', borderWidth: 4, borderColor: '#A09563', borderTopColor: '#00293F', minHeight: 115}}>
            <Text style={{left: 10, top: 10, color: '#55503C', fontSize: 30}}>So, how was your day?</Text>
            <Text style={{left: 5,top: 10, color: '#55503C',fontSize: 20}}>Use as much details as possible to describe what happened today</Text>
            </View>
            <Text style={{top: 25, left: 20, fontSize: 30, color: '#55503C', }}>Daily Entry</Text>
            <Text style={{top: 40, left: 20, color: '#55503C', fontSize: 25}}>type here</Text>
            <Image style={{left: 330, top: -66}}source={{uri: "https://i.postimg.cc/J0w4RKJ8/Pasted-Graphic-3.png", height: 55, width: 55}}/>
        </View>
    )
}