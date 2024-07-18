import { Link,useNavigation } from "expo-router";
import React, { useEffect, useState } from "react"
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
import Icon from 'react-native-vector-icons/FontAwesome';



export default function YourFriends() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    return(
        <View>
          <Text style={{alignSelf: "center",top: 60, fontSize: 30, fontWeight: "bold"}}>Your Friends</Text>
          <Icon name="user" color={"black"} size={30} style={styles.IconFriends}></Icon>
          <Text style={styles.Friends}>(Friend's Name)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
view: {
  
},
Friends: {
  fontSize: 40,
  top: 60,
  left: 40,
},
IconFriends: {
  top: 108,
  right: 175,
  borderWidth: 2,
  alignSelf: "center",
  padding: 4,
  borderRadius:14
}

});