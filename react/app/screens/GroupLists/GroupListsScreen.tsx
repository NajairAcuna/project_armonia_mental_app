import React, { useState, useEffect } from 'react';
import { Link, useNavigation } from "expo-router";
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
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function GroupLists() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    return(
        <View>
            <Text style={{top: 100, textAlign: 'center', fontSize: 35, borderWidth: 5, padding: 4,}}>Your Wellness Groups</Text>
            <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10, borderWidth: 5, top: 120, alignSelf: 'center'}}>
            <Text style={{textAlign: 'right'}}>about: hello, this group is open up about....</Text>
            <Text style={{textAlign: 'right'}}>(Group Name)</Text>
            <Text style={{textAlign: 'right', top: 55, backgroundColor: "#FF4500", alignSelf: "flex-end"}}>Leave Group</Text>
            </View>
            <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10, borderWidth: 5, top: 150, alignSelf: 'center'}}>
            <Text style={{textAlign: 'right'}}>about: hello, this group is open up about....</Text>
            <Text style={{textAlign: 'right'}}>(Group Name)</Text>
            <Text style={{textAlign: 'right', top: 55, backgroundColor: "#FF4500",alignSelf: "flex-end"}}>Leave Group</Text>
            </View>
            <View style={{width: 250, height: 150, backgroundColor: '#ddd', padding: 10, borderWidth: 5, top: 180, alignSelf: 'center'}}>
            <Text style={{textAlign: 'right'}}>about: hello, this group is open up about....</Text>
            <Text style={{textAlign: 'right'}}>(Group Name)</Text>
            <Text style={{textAlign: 'right', top: 55, backgroundColor: "#FF4500",alignSelf: "flex-end"}}>Leave Group</Text>
            </View>
            <View style={styles.BackButton}>
            <Link href={"../ExplorerPage/ExplorerPageScreen"}>
            <Icon name='arrow-left' size={90}></Icon>
            </Link>
            </View>
        </View>

        
        //borderWidth: 2,
     //alignSelf: "center",
    //padding: 4,
    )
}
const styles = StyleSheet.create({
    BackButton: {
        borderWidth: 5, borderRadius: 50, alignSelf: 'flex-start', top: 200
    }
});
