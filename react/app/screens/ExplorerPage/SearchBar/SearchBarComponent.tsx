import React, { useState } from "react"
import { SearchBar, withTheme } from '@rneui/themed';
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
          round={true}
          // lightTheme={true}
          inputContainerStyle={{backgroundColor: 'white'}}
          containerStyle={{backgroundColor: '#065064'}}
          // inputStyle={{backgroundColor: 'white', color: 'black',}}
          underlineColorAndroid={"blue"}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
view: {
  width: 295,
  top: 52,
  
},

});