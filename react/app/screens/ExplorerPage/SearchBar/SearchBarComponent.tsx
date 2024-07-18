import React, { useState } from "react"
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
  SwitchComponent,
} from "react-native";

type SearchBarComponentProps = {};

// const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
export default function SearchBarComponent() {

  const [search, setSearch] = useState("");

  const updateSearch = (search:any) => {
    setSearch(search);
  };
  
  return (
      <View style={styles.view}>
        <SearchBar 
          placeholder="Type group here..."
          onChangeText={updateSearch}
          value={search}
          platform="default"
          lightTheme={true}
          round={true}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
view: {
  width: 316,
  marginTop: 65,
},

});