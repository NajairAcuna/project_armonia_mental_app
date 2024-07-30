import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react"
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
  } from "react-native";
  import ProfilePopUp from "../ExplorerPage/ProfilePopUp/ProfilePopUp";
  import HomeIcon from "../ExplorerPage/HomeIcon/HomeScreenIcon";
  import YourFriendsIcon from "../ExplorerPage/YourFriendsIcon/YourFriendsIconScreen";
  import GroupListsIcon from "../ExplorerPage/GroupsListsIcon/GroupsListsIconScreen";
  import WhatAreYouFeelingIconScreen from "../ExplorerPage/WhatAreYouFeelingIcon/WhatAreYouFeelingIconScreen";

  export default function TreeTime() {

    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    return(

      <View style={{backgroundColor: "#065064", width: "100%", height: "20%"}}>
        <Text style={{alignSelf: 'center', fontSize: 40, color:'#46D98D', top: 50, }}>My Forest</Text>
         <View style={{left: 120, bottom: 55}}>
          <ProfilePopUp/>
         </View>


         {/* icons for the bar  */}
         <View style={styles.IconsForBar}>
         <YourFriendsIcon/>
         <HomeIcon/>
         <WhatAreYouFeelingIconScreen/>
         <GroupListsIcon/>
        </View>
        
        <View style={{backgroundColor: "#0CBEA2", top: -25,width: '100%', height: "383%"}}>
        <Text style={{fontSize: 35, top: 450, textAlign: 'center', color: '#065064', fontWeight: 'bold'}}>Bonsai tree</Text>
        <Text style={{fontSize: 20,top: 470, textAlign: 'center', fontWeight: 'bold', color: '#065064'}}>Number of days:</Text>
        <Text style={{textAlign: 'center', top: 485, fontSize: 20, color: '#065064', fontWeight: 'bold'}}>0-4</Text>
        </View>
        <View>
          <Image style={{height: 260, width: 110, top: -525, left: 150}} source={{uri:'https://i.postimg.cc/mrqW8Nh4/Pasted.png'}}/>
        </View>

      </View>


    )
  }

  //          

  const styles = StyleSheet.create({
    IconsForBar: {
      top: 695,
     justifyContent: "space-evenly",
     left: 0,
     flexDirection: "row",
     backgroundColor: "#065064",
     paddingBottom: 20,
     borderWidth: 4,
     borderColor: "#065064"
    },
  })
