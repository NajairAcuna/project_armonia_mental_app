import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";
import TopBar from "@/components/TopBar";

export default function JournalNoteScreen() {
  const [text, onChangeText] = React.useState("Type here");

  return (
    <View>
      <TopBar title="Journal" />
      <View style={{ backgroundColor: "#ffeea6", height: "100%" }}>
        <View style={styles.journalHeader}>
          <Text style={styles.journalTopText}>
            So, how was your day? Use as much detail as possible to describe
            what happened today
          </Text>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", right: 20, top: 110 }}
          onPress={() => router.navigate("journalEntries")}
        >
          <ImageBackground
            source={require("@/assets/extras/bookmark_journal.png")}
            style={{
              width: 75,
              height: 70,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                top: 10,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              8/10/24
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <Image
          source={require("@/assets/extras/journal_spiral.png")}
          style={{
            width: 50,
            resizeMode: "contain",
            position: "absolute",
            top: -40,
          }}
        />
        <Text
          style={{
            fontSize: 30,
            left: 80,
            top: 30,
            color: "#55503C",
            fontFamily: "Times New Roman",
          }}
        >
          Daily Entry
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          multiline={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  journalHeader: {
    backgroundColor: "#A09563",
    height: 110,
    borderBottomColor: "#776e49",
    borderBottomWidth: 5,
  },
  journalTopText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "500",
    width: 420,
    paddingLeft: 13,
    paddingTop: 13,
  },
  input: {
    fontSize: 26,
    fontFamily: "Times New Roman",
    color: "#55503C",
    left: 80,
    top: 80,
    height: 400,
    width: 330,
  },
});
