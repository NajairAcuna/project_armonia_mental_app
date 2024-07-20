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
          <View style={styles.BackButton}>
          <Link href={"../ExplorerPage/ExplorerPageScreen"}>
          <Icon name='arrow-left' size={90}></Icon>
          </Link>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  BackButton: {
    borderWidth: 5, borderRadius: 50, alignSelf: 'flex-start', top: 600
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