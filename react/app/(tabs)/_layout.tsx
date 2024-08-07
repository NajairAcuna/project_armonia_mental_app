import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#065064",
          height: 95,
        },
        tabBarLabelStyle: { color: "#C2F9DE", fontSize: 13 },
      }}
    >
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          // tabBarIconStyle: { color: "#C2F9DE" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"people"}
              color={focused ? "#C2F9DE" : "#15a95f"}
              size={34}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          // tabBarIconStyle: { color: "#C2F9DE" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"home"}
              color={focused ? "#C2F9DE" : "#15a95f"}
              size={34}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          // tabBarIconStyle: { color: "#C2F9DE" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"book"}
              color={focused ? "#C2F9DE" : "#15a95f"}
              size={34}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="safeSpaces"
        options={{
          title: "Safe Spaces",
          // tabBarIconStyle: { color: "#C2F9DE" },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={"hand-left"}
              color={focused ? "#C2F9DE" : "#15a95f"}
              size={34}
            />
          ),
        }}
      />
    </Tabs>
  );
}
