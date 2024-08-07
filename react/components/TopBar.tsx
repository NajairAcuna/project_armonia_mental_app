import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import ProfilePopUp from "./ProfilePopUp";

export default function TopBar({ title }: { title: string }) {
  const [visible, setVisible] = React.useState(false);
  const openModal = () => {
    setVisible(true);
    console.log("open modal");
  };

  return (
    <>
      <ProfilePopUp setVisible={setVisible} isVisible={visible} />
      <View style={styles.tabBarContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 60, right: 20 }}
          onPress={openModal}
        >
          <Image
            source={require("@/assets/images/icons/avatar_icon.png")}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 120,
    backgroundColor: "#065064",
  },
  titleText: {
    fontSize: 40,
    color: "white",
    // textAlign: "center",
    top: 60,
    left: 20,
  },
});
