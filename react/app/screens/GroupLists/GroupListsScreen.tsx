import React, { useState, useEffect } from "react";
import { Link, useNavigation } from "expo-router";
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
import Icon from "react-native-vector-icons/FontAwesome5";
import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
import HomeIconButton from "../ExplorerPage/HomeIcon/HomeScreenIcon";
import ProfilePopUp from "../../../components/ProfilePopUp";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";


export default function GroupLists() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);
  const [text, onChangeText] = React.useState('');

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", paddingBottom: 640 }}>
      <Text
        style={{
          top: -0,
          textAlign: "center",
          fontSize: 25,
          borderWidth: 5,
          padding: 4,
          backgroundColor: "#026471",
          color: "white",
          paddingTop: 40,
          borderColor: "#026471",
          borderBottomWidth: 20
        }}
      >
        Academic Stress
      </Text>
      <View style={{bottom:50}}>
        <View  style={{left: 150, bottom: 60}}>
        <ProfilePopUp/>
        </View>
      </View>
      <View
        style={{
          borderWidth: 2,
          flexDirection: "column",
          alignSelf: "baseline",
          paddingBottom: 590,
          paddingRight: 25,
          backgroundColor: "#30B18A",
          borderRightColor: "#DADADA",
          borderTopColor: "#30B18A",
          borderLeftColor: "#30B18A",
          top: -45,
        }}
      >
        <Image
          style={{
            height: 70,
            width: 70,
            top: 10,
            backgroundColor: "#dedede",
            borderRadius: 20,
            left: 15,
          }}
          source={{ uri: "https://i.postimg.cc/XqRtmDRM/Pasted-Graphic.png" }}
        />
        <Image
          style={{ height: 70, width: 70, top: 30, left: 15, borderRadius: 20 }}
          source={{
            uri: "https://i.postimg.cc/28FfgCS2/Pasted-Graphic-1.png",
          }}
        />
        <Image
          style={{
            height: 70,
            width: 70,
            top: 45,
            left: 15,
            borderRadius: 20,
          }}
          source={{
            uri: "https://i.postimg.cc/4NR5n53F/9a09e5cafa643f6ec7b38c63766d5bf4.jpg",
          }}
        />
        <View style={{backgroundColor: '#3EFFC5', top: 80, left: 25, borderRadius: 10, height: 50, width: 50 }}>
        <Link style={{left: 5, top: 3 }} href={'../GroupLists/CreateGroup/CreateGroupScreen'}>
        <Icon name="plus" size={45} style={{color:"#30B18A", borderWidth: 1}}></Icon>
        </Link>
        </View>
      </View>
      <View style={{}}>
        <TextInput style={{height: 45, borderWidth: 1, top: -880, width: 220, left: 100, borderRadius: 25}} onChangeText={onChangeText} value={text}></TextInput>
        <Icon name="plus" size={25} style={{top: -916, left: 340, borderRadius: 10}}></Icon>
      </View>
      <View>
        <Text style={{left: 115,top: -871, fontSize: 25, color: 'grey',}}>chat</Text>
        <Text style={{left: 125,top: -851, fontSize: 25}}>#-General</Text>
        <Text style={{left: 125,top: -841, fontSize: 25}}>#-Advices</Text>
        <Text style={{left: 125,top: -831, fontSize: 25}}>#-Formulas</Text>
      </View>
      <View style={styles.IconsForChat}>
        <View style={styles.IconsForBar}>
        <YourFriendsIcon/>
        <HomeIcon/>
        <WhatAreYouFeelingIconScreen/>
        <GroupListsIcon/>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  IconsForChat: {
    borderWidth: 0,
    top: -170,
    left: 0,
    backgroundColor: "#026471",
    paddingBottom: 70,
    borderColor: "#026471",
  },
  ImageGroup: {
    width: 85,
    height: 90,
    top: -80,
    right: 20,
    textAlign: "left",
  },
  IconButton: {
    color: "#003855",
    right: -10,
  },
  IconsForBar: {
    top: -230,
   justifyContent: "space-evenly",
   left: 0,
   flexDirection: "row",
   backgroundColor: "#026471",
   paddingBottom: 25,
   borderWidth: 4,
   borderColor: "#026471"
  }
});
