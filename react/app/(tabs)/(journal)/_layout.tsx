import { Stack } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

// import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";

export default function StackLayout() {
  const colorScheme = useColorScheme();

  // console.log("this is the color scheme", colorScheme);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="journal" />
      <Stack.Screen name="journalNote" />
      <Stack.Screen name="journalEntries" />
    </Stack>
  );
}
