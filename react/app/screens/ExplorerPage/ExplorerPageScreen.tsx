import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from '@rneui/themed';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

type SearchBarComponentProps = {};

export default function ExplorerPage() {
  const [search, setSearch] = useState("");
  const updateSearch = (search:any) => {
    setSearch(search);
  };

  return (

    <View>
       <SearchBar placeholder="search" onChangeText={updateSearch} value="Type group name...">
       </SearchBar>
    </View>
  )
}

const styles = StyleSheet.create({
  motiTitle: {
    borderColor: "#20232a",
  },
  create: {
    flex: 5,
    padding: 20,
    backgroundColor: "#eaeaea",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 5,
    borderColor: "#20232a",
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  asembler: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  Main: {
    backgroundColor: "#FFF",
    width: 250,
    height: 50,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  Input: {
    marginLeft: 10,
    marginTop: 3,
  },
  buttonP: {
    height: 50,
    width: 70,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "#C0C0C0",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 16
  }


 
});
