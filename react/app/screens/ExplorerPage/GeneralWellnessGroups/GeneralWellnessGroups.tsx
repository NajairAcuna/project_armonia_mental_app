import React, { Component } from "react";
import { SearchBar } from "@rneui/themed";
import { Link, router } from "expo-router";
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
import Icon from "react-native-vector-icons/FontAwesome5";

export default function GeneralWellnessGroups() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Pressable
        onPress={() => {
          router.navigate({
            pathname: "/screens/YourWellnessGroups/YourWellnessGroupsScreen",
            params: {
              title: "Academic Stress",
              about:
                "For people who struggle with school",
              members: 10,
            },
          });
        }}
      >
        <View
          style={{
            width: 350,
            height: 200,
            backgroundColor: "#F2F2F2",
            padding: 10,
            top: -20,
            borderWidth: 5,
            borderColor: "#F2F2F2",
            borderRadius: 35,
          }}
        >
          {/* <Link
          href="/screens/YourWellnessGroups/YourWellnessGroupsScreen"
          style={{}}
        > */}
          <Text
            style={{
              top: 15,
              left: -5,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Academic {"\n"} Stress {"\n"}
          </Text>
          <Text style={{ fontSize: 20, textAlign: "right" , left:-10}}>
            For people {"\n"} struggling {"\n"} with school. 
          </Text>
          {/* </Link> */}
          <Image
            style={{
              height: 170,
              width: 170,
              top: -160,
              left: 10,
              backgroundColor: "#dedede",
              borderRadius: 20,
            }}
            source={{
              uri: "https://i.postimg.cc/XqRtmDRM/Pasted-Graphic.png",
            }}
          />
        </View>

        <View
          style={{
            width: 350,
            height: 200,
            backgroundColor: "#F2F2F2",
            padding: 10,
            marginTop: 5,
            borderWidth: 5,
            borderColor: "#F2F2F2",
            borderRadius: 35,
          }}
        >
          <Text
            style={{
              top: 0,
              left: 1,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Coping with loss {"\n"}
          </Text>
          <Text style={{ textAlign: "right", fontSize: 20 }}>
            Have you {"\n"} lost someone? {"\n"} come and {"\n"} talk about it
          </Text>
          <Image
            style={{
              height: 160,
              width: 160,
              top: -140,
              left: -0,
              borderRadius: 20,
            }}
            source={{
              uri: "https://i.postimg.cc/QNvtjNsD/Pasted-Graphic-1.png",
            }}
          />
        </View>

        <View
          style={{
            width: 350,
            height: 200,
            backgroundColor: "#F2F2F2",
            padding: 10,
            marginTop: 25,
            borderWidth: 5,
            borderColor: "#F2F2F2",
            borderRadius: 35,
          }}
        >
          <Text
            style={{
              top: 0,
              left: -10,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Broken Trust {"\n"}
          </Text>
          <Text style={{ textAlign: "right", fontSize: 20 }}>
            Cheated on? {"\n"} Friend hurt you? {"\n"} Join here
          </Text>
          <Image
            style={{
              height: 135,
              width: 135,
              top: -120,
              left: 10,
              borderRadius: 20,
            }}
            source={{
              uri: "https://i.postimg.cc/4NR5n53F/9a09e5cafa643f6ec7b38c63766d5bf4.jpg",
            }}
          />
        </View>
      </Pressable>
    </View>
  );
}

const separatorStyles: ViewStyle = {
  height: 5,
  width: "50%",
  backgroundColor: "#FFFFFF",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  groupText: {
    flex: 5,
  },
  view: {},
  ImageGroup: {
    width: 90,
    height: 80,
  },
});
