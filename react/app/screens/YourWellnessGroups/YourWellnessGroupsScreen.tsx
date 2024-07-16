import React, { useState } from "react"
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
} from "react-native";

export default function WellnessGroups() {
  return (
    <View>
      <Text style={{fontSize: 35, alignSelf: "center",}}>(group name)</Text>
      <Text style={{fontSize: 35, marginVertical: 100}}>Members</Text>
      <Text style={{fontSize: 35, marginVertical: -40 ,fontWeight: 'bold'}}>About:</Text>
      <Text style={{marginVertical: 30, fontSize: 20}}> Hello, this group is to open up about depression and try to help deal with hope to see you in here.</Text>
    </View>
  )
}