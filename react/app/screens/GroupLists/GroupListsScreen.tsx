import React, { useState, useEffect } from "react";
import { Link, useNavigation } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";
import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
import HomeIconButton from "../ExplorerPage/HomeIcon/HomeScreenIcon";


export default function GroupLists() {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: "white", paddingBottom: 640 }}>
      <Text
        style={{
          top: -0,
          textAlign: "center",
          fontSize: 35,
          borderWidth: 5,
          padding: 4,
          backgroundColor: "#026471",
          color: "white",
          paddingTop: 40,
          borderColor: "#026471",
        }}
      >
        Alcoholic Anonymous
      </Text>
      <View
        style={{
          borderWidth: 1,
          flexDirection: "column",
          alignSelf: "baseline",
          paddingBottom: 590,
          paddingRight: 25,
          backgroundColor: "#30B18A",
          borderColor: "#30B18A",
        }}
      >
        <Image
          style={{
            height: 70,
            width: 70,
            top: 60,
            backgroundColor: "#dedede",
            borderRadius: 20,
            left: 15,
          }}
          source={{ uri: "https://i.postimg.cc/7L9cnR56/Pasted-Graphic-2.png" }}
        />
        <Image
          style={{ height: 70, width: 70, top: 90, left: 15, borderRadius: 20 }}
          source={{
            uri: "https://i.postimg.cc/KzXKQ0w6/ff8b2f16dcb5f23231bc7166e143a328.jpg",
          }}
        />
        <Image
          style={{
            height: 70,
            width: 70,
            top: 120,
            left: 15,
            borderRadius: 20,
          }}
          source={{
            uri: "https://i.postimg.cc/4NR5n53F/9a09e5cafa643f6ec7b38c63766d5bf4.jpg",
          }}
        />
      </View>
      <View style={{}}></View>
      <View style={{}}></View>
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
    borderWidth: 1,
    top: -125,
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
    top: 10,
   justifyContent: "space-evenly",
   left: 1,
   flexDirection: "row",
   backgroundColor: "#026471",
   paddingBottom: 20,
   borderWidth: 4,
   borderColor: "#026471"
  }
});
