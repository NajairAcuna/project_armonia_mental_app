import React from "react";
import { Image, View } from "react-native";

import TopBar from "@/components/TopBar";

export default function JournalEntriesScreen() {
  return (
    <View>
      <TopBar title="My Journals" />
      <Image
        source={require("@/assets/images/journal_entries.png")}
        style={{
          width: 400,
          height: 680,
          resizeMode: "contain",
          alignSelf: "center",
          top: 140,
          position: "absolute",
        }}
      />
    </View>
  );
}
