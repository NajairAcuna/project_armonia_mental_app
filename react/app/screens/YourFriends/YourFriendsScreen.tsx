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
// import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "expo-linear-gradient";
import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
import ProfilePopUp from "../../../components/ProfilePopUp";



export default function YourFriends() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    return(
        <View>
          {/*<Image style={{height: 40, width: 40, top: 5, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/85D8rG12/1552424-tilio-v1-ultrakill.jpg"}}/>*/}
          <View>
          <Text style={{top: -15, fontSize: 30, fontWeight: "bold", backgroundColor: "#065064", color: "#065064", paddingLeft: 250, paddingVertical: 20}}>Your Friends</Text>
          <Image style={{height: 40, width: 40, top: 40, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/85D8rG12/1552424-tilio-v1-ultrakill.jpg"}}/>
          <Image source={{uri:"https://i.postimg.cc/kXzRMmNK/Pasted-Graphic.png"}} style={{width: 40, height: 40, backgroundColor: '#13aa5f', borderWidth: 1, left: 320}}></Image>
          <Text style={styles.Friends}>
            <Link href={'/Users/txthackathon/Desktop/project_armonia_mental_app-master/react/app/screens/YourFriends/FriendsProfile/TobyScreen.tsx'}>Lewis Carroll</Link>
          </Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 40, left: 5, borderRadius: 20,}} source={{uri:"https://i.postimg.cc/QMqT7Tqr/7d1a5405c173248616c34a760e4bf55e.jpg"}}/>
          <Image source={{uri:"https://i.postimg.cc/kXzRMmNK/Pasted-Graphic.png"}} style={{width: 40, height: 40, backgroundColor: '#13aa5f', borderWidth: 1, left: 320}}></Image>
          <Text style={styles.Friends}>
            Bud Cullen
          </Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 40, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/V6x0QWfn/180px-Sentinelprimeanimatedbattlemask.jpg"}}/>
          <Image source={{uri:"https://i.postimg.cc/kXzRMmNK/Pasted-Graphic.png"}} style={{width: 40, height: 40, backgroundColor: '#13aa5f', borderWidth: 1, left: 320}}></Image>
          <Text style={styles.Friends}>
            Derrick Milne
          </Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 40, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/gJd1MfRZ/a85c739094814807544ea6ea4243f22d.jpg"}}/>
          <Image source={{uri:"https://i.postimg.cc/kXzRMmNK/Pasted-Graphic.png"}} style={{width: 40, height: 40, backgroundColor: '#13aa5f', borderWidth: 1, left: 320}}></Image>
          <Text style={styles.Friends}>
            Jessie Figueroa
          </Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 40, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/ydHDYX3H/ef5cccf401166ba9154039a39fdb29ee.jpg"}}/>
          <Image source={{uri:"https://i.postimg.cc/kXzRMmNK/Pasted-Graphic.png"}} style={{width: 40, height: 40, backgroundColor: '#13aa5f', borderWidth: 1, left: 320}}></Image>
          <Text style={styles.Friends}>
            Dominic Fenix
          </Text>
          </View>
          <View style={styles.BackButton}>
          <YourFriendsIcon/>
          <HomeIcon/>
          <WhatAreYouFeelingIconScreen/>
          <GroupListsIcon/>
          </View>
          <View>
            <Text style={{top: -675, left: 40, color:'white', fontSize: 25}}>Your Friends</Text>
          </View>
          <View style={{top: -775, left: 140}}>
            <ProfilePopUp/>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  BackButton: {
    top:125,
    justifyContent: "space-evenly",
    left: 0,
    flexDirection: "row",
    backgroundColor: "#065064",
    paddingBottom: 20,
    borderWidth: 8,
    borderColor: "#065064"
  },
Friends: {
  fontSize: 40,
  top: -35,
  left: 65,
  margin: -10
},
IconFriends: {
  top: 100,
  right: 175,
  alignSelf: "center",
  height: 30,
  width: 30
},
TrophyIcon: {
  width: 40, height: 40
}

});

<Image source={{uri:"https://i.postimg.cc/PxP8SMGm/Pasted-Graphic-3.png"}} style={{width: 40, height: 40, backgroundColor: '#13aa5f', borderWidth: 1}}></Image>
