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
              title: "Depression",
              about:
                "You can also navigate imperatively using the router object. This is useful when you need to perform a navigation action outside a React component, such as in an event handler or a utility function.",
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
              top: 10,
              left: -5,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Alcoholic {"\n"} Anonymous {"\n"}
          </Text>
          <Text style={{ fontSize: 20, textAlign: "right" , left:-10}}>
            For {"\n"} struggling {"\n"} alcoholics
          </Text>
          {/* </Link> */}
          <Image
            style={{
              height: 170,
              width: 170,
              top: -145,
              left: 10,
              backgroundColor: "#dedede",
              borderRadius: 20,
            }}
            source={{
              uri: "https://i.postimg.cc/7L9cnR56/Pasted-Graphic-2.png",
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
              left: -50,
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            Gymming {"\n"}
          </Text>
          <Text style={{ textAlign: "right", fontSize: 20 }}>
            Deal with {"\n"} your emotions in {"\n"} a positive way
          </Text>
          <Image
            style={{
              height: 160,
              width: 160,
              top: -110,
              left: -0,
              borderRadius: 20,
            }}
            source={{
              uri: "https://i.postimg.cc/KzXKQ0w6/ff8b2f16dcb5f23231bc7166e143a328.jpg",
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
              left: -50,
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
