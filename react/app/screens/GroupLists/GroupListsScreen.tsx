import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    const [groups, setGroups] = useState([]);

    useEffect(() => {
      navigation.setOptions({headerShown: false});
        
    }, [navigation]);



    return(
        <View style={{backgroundColor:  'white', paddingBottom: 240}}>
            <Text style={{top: -0, textAlign: 'center', fontSize: 35, borderWidth: 5, padding: 4, backgroundColor: "#026471", color: "white", paddingTop: 40, borderColor:"#026471"  }}>Your Safe Spaces</Text>
            <View style={{width: 250, height: 150, backgroundColor: 'white', padding: 10, borderWidth: 5, top: 20, alignSelf: 'center', borderColor: 'white'}}>
            <Text style={{textAlign: 'right', left: -10, fontSize: 20}}>about: hello, this </Text>
            <Text style={{textAlign: 'right', left: -9, fontSize: 20}}> group is open up</Text>
            <Text style={{textAlign: 'right', left: -65, fontSize: 20}}> about....</Text>
            <Text style={{textAlign: 'right', top: 50}}>(Group Name)</Text>
            <Text style={{textAlign: 'right', top: 55, alignSelf: "flex-end"}}>Leave Group</Text>
            <Image style={styles.ImageGroup} source={{uri: "https://i.postimg.cc/9F3CC8Mw/1000-F-756350403-e-Njw-YCJixcy-Q5-P7b7f-HGt9-Q6-Du-HF3-VII.jpg"}}/>            
            </View>
            <View style={{width: 250, height: 150, backgroundColor: 'white', padding: 10, borderWidth: 5, top: 40, alignSelf: 'center', borderColor: 'white'}}>
            <Text style={{textAlign: 'right', left: -10}}>about: hello, this </Text>
            <Text style={{textAlign: 'right', left: -9}}> group is open up</Text>
            <Text style={{textAlign: 'right', left: -65}}> about....</Text>
            <Text style={{textAlign: 'right', top: 50}}>(Group Name)</Text>
            <Text style={{textAlign: 'right', top: 55, alignSelf: "flex-end"}}>Leave Group</Text>
            <Image style={styles.ImageGroup} source={{uri: "https://i.postimg.cc/9F3CC8Mw/1000-F-756350403-e-Njw-YCJixcy-Q5-P7b7f-HGt9-Q6-Du-HF3-VII.jpg"}}/>
            </View>
            <View style={{width: 250, height: 150, backgroundColor: 'white', padding: 10, borderWidth: 5, top: 60, alignSelf: 'center', borderColor: 'white'}}>
            <Text style={{textAlign: 'right', left: -10}}>about: hello, this </Text>
            <Text style={{textAlign: 'right', left: -9}}> group is open up</Text>
            <Text style={{textAlign: 'right', left: -65}}> about....</Text>
            <Text style={{textAlign: 'right', top: 50}}>(Group Name)</Text>
            <Text style={{textAlign: 'right', top: 55, alignSelf: "flex-end"}}>Leave Group</Text>
            <Image style={styles.ImageGroup} source={{uri: "https://i.postimg.cc/9F3CC8Mw/1000-F-756350403-e-Njw-YCJixcy-Q5-P7b7f-HGt9-Q6-Du-HF3-VII.jpg"}}/>
            </View>
            <View style={styles.BackButton}>
            <Link href={"../ExplorerPage/ExplorerPageScreen"}>
            <Icon name='arrow-left' size={40} style={styles.IconButton}></Icon>
            </Link>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    BackButton: {
    borderWidth: 1, top: 235, left: 0,backgroundColor: "#026471", paddingBottom: 60, borderColor: "#026471",
    },
    ImageGroup: {
        width: 85,
        height: 90,
        top: -80,
        right: 20,
        textAlign: 'left'
      },
      IconButton: {
        color: "#003855",
        right: -10
      }
});
