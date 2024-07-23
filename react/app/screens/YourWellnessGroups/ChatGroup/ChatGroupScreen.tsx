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

export default function ChatGroup() {

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    const [text, onChangeText] = React.useState('');

    return(
        <View>
            <Text style={{top: 60, alignSelf: "center", fontSize: 30}}>(Group name)</Text>
            <View style={styles.IconsChat}>
                <View style={{borderWidth: 1, flexDirection: 'column', alignSelf: "center", right: 162}}>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                <Icon name="user" size={70}></Icon>
                </View>
            </View>
            <View>
                <TextInput          
                style={styles.TextBox} 
                onChangeText={onChangeText}
                editable={true} 
                multiline={true}
                value={text}/>
            </View>
            <View>
             <Icon style={{left: 320, bottom: 70}} name="user" size={50}></Icon>
             <Text style={{top: -100, left: 180}}>blah blah blah blah</Text>
             <Icon style={{left: 94, bottom: 200}} name="user" size={50}></Icon>
             <Text style={{left: 160, top: -230}}>Blah blah blah blah?</Text>
             <Icon style={{left: 94, bottom: 380}} name="user" size={50}></Icon>
             <Text style={{left: 160, top: -410}}>Blah blah blah blah  blah  blah blah</Text>
             <Icon style={{left: 94, bottom: 645}} name="user" size={50}></Icon>
             <Text style={{left: 160, top: -670}}>Blah blah blah blah  blah  blah blah</Text>
             <Text style={{left: 160, top: -670}}>Blah blah blah blah  blah  blah blah</Text>
            </View>
            <View style={styles.BackButton}>
            <Link href="../YourWellnessGroupsScreen">
            <Icon name='arrow-left' size={60}></Icon>
            </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    IconsChat: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        top: 100,
        left: 7,
    },
    BackButton: {
        borderWidth: 5, borderRadius: 60, alignSelf: 'center', top: -220, right: 155
    },
    TextBox: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 10,
        paddingStart: 3,
        width: 250,
        left: 100,
        top: 115
        }
  });