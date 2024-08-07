import { withTheme } from "@rneui/themed";
import React, { useState } from "react";
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
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Svg, { Circle } from "react-native-svg";
import { Link, router } from "expo-router";
import { BlurView } from "expo-blur";

export default function ProfilePopUp({
  isVisible,
  setVisible,
}: {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  //   const [modalVisible, setModalVisible] = useState(false);

  //   const openModal = () => {
  //     if (isVisible) {
  //       setVisible(false);
  //     } else {
  //       setVisible(true);
  //     }
  //   };

  const logOut = () => {
    // router.navigate("/index");
    console.log("log out");
  };

  const closeModal = () => {
    setVisible(false);
    console.log("close modal");
  };
  if (!isVisible) {
    return null;
  }
  return (
    <BlurView
      tint="light"
      intensity={20}
      style={styles.blurContainer}
      onPointerDown={closeModal}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}

        // onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.secondaryShadowWrapper}>
            {/* <TouchableOpacity onPress={closeModal}> */}

            <View style={styles.modalContent}>
              <TouchableOpacity
                style={{ position: "absolute", right: 15, top: 15 }}
                onPress={closeModal}
              >
                <Icon name="times-circle" size={43} color={"#296746"} />
              </TouchableOpacity>
              <Image
                source={require("@/assets/images/icons/edit_icon.png")}
                style={{ width: 43, height: 43 }}
              />
              <Image
                source={require("@/assets/images/icons/avatar_icon.png")}
                style={{
                  width: 101,
                  height: 101,
                  position: "absolute",
                  top: 50,
                  right: 40,
                }}
              />
              <View style={[styles.textSection, styles.nameSection]}>
                <Text style={[styles.titleText]}>Name</Text>
                <Text style={[styles.inputtedText]}>William C. Milne</Text>
              </View>
              <View style={[styles.textSection]}>
                <Text style={[styles.titleText]}>Trees</Text>
                <Text style={[styles.inputtedText]}>2</Text>
              </View>

              <View style={[styles.textSection, styles.aboutMeSection]}>
                <Text style={[styles.titleText]}>About me: </Text>
                <Text style={[styles.inputtedText]}>
                  Hi, my name is Willy! I like video games and art stuff
                </Text>
              </View>

              {/* <Link
                style={styles.myForest}
                href={"../TreeTimeScreen/TreeTime"}
                onPress={closeModal}
              >
                <Icon name="tree" size={35} color={"#1A6A43"}></Icon>
                <Text style={{ color: "#ACE2F0", fontSize: 20 }}>
                  my forest
                </Text>
              </Link> */}

              {/* <Icon
                style={{ color: "#1A6A43", top: -165, left: 230 }}
                name="pencil-alt"
                size={35}
              ></Icon> */}
              <View style={styles.buttonsContainer}>
                <TouchableOpacity>
                  <Image
                    source={require("@/assets/images/buttons/my_forest_button.png")}
                    style={styles.forestIcon}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={logOut}>
                  <Image
                    source={require("@/assets/images/buttons/log_out_button.png")}
                    style={styles.logOutIcon}
                  />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.closeButton}>
                <Link style={styles.modalText} href={""}>
                  <Icon name="sign-in-alt" size={20} />
                  <Text>Log out</Text>
                </Link>
              </TouchableOpacity> */}
              </View>
            </View>

            {/* </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  openButton: {
    flex: -1,
    alignSelf: "center",
    top: 62,
    left: 10,
    height: 45,
    width: 45,
    borderRadius: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1EA060",
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: 12,
    paddingBottom: 41,
    // borderWidth: 5,
    // borderColor: "#30B18A",
    borderRadius: 42,
    width: "90%",
    shadowColor: "#48DA92", // Shadow color
    shadowOffset: { width: 0, height: -9 }, // Position: X = 1, Y = -9
    shadowOpacity: 1, // Full opacity
    shadowRadius: 0, // No blur
    elevation: 0, // No spread (for Android)
  },

  secondaryShadowWrapper: {
    shadowColor: "#1A7246", // Secondary shadow color
    shadowOffset: { width: 0, height: 9 }, // Position: X = 0, Y = 9
    shadowOpacity: 1, // Full opacity
    shadowRadius: 0, // No blur
    elevation: 0, // No spread (for Android)
  },
  titleText: {
    color: "#53CB8A",
    // fontFamily: "AveriaSerif-Light",
    fontFamily: "serif",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: 600,
    // lineHeight: "var(--Body-Large-Line-Height, 24px)" /* 104.348% */,
    // letterSpacing: "var(--Body-Large-Tracking, 0.5px)",
  },
  inputtedText: {
    color: "#FFF",
    // fontFamily: "var(--sds-typography-family-serif)",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    // lineHeight: "var(--Body-Large-Line-Height, 24px)",
    // letterSpacing: "var(--Body-Large-Tracking, 0.5px)",
  },
  textSection: {
    marginBottom: 20,
  },

  nameSection: {
    marginTop: 15,
  },
  modalText: {
    top: 5,
    fontSize: 25,
    color: "white",
    borderRadius: 20,
    borderColor: "red",
    paddingTop: 1,
    left: 10,
  },
  aboutMeSection: {
    marginBottom: 27,
  },

  forestIcon: {
    width: 120,
    height: 55,
    marginRight: 25,
  },
  logOutIcon: {
    width: 117,
    height: 55,
    marginLeft: 25,
  },

  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "",
    // alignItems: "center",
    justifyContent: "center",
  },
  forestContainer: {
    marginRight: 15,
  },

  blurContainer: {
    width: "100%",
    height: "100%",
    // width: 500,
    // height: 500,
    position: "absolute",
    zIndex: 1,
  },
  closeButton: {
    marginTop: 70,
    alignSelf: "flex-end",
    borderRadius: 10,
    backgroundColor: "red",
    fontSize: 20,
    top: -6,
    minWidth: 110,
    height: 45,
    paddingRight: 27,
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  IconsForPopUp: {
    borderWidth: 1,
    top: -125,
    left: 0,
    backgroundColor: "#026471",
    paddingBottom: 70,
    borderColor: "#026471",
  },
  myForest: {
    color: "#D4FFEA",
    top: -0,
    left: 2,
    borderWidth: 3,
    width: 120,
    borderColor: "#1A6A43",
    borderRadius: 10,
    borderBottomWidth: 10,
  },
});
