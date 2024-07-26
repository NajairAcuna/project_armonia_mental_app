import { Link,useNavigation } from "expo-router";
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
// import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "expo-linear-gradient";



export default function YourFriends() {
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({headerShown: false});
  
    }, [navigation]);

    return(
        <View>
          <View>
          <Text style={{top: -15, fontSize: 30, fontWeight: "bold", backgroundColor: "#065064", color: "#065064", paddingLeft: 250, paddingVertical: 20}}>Your Friends</Text>
          <Image style={{height: 40, width: 40, top: 5, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/85D8rG12/1552424-tilio-v1-ultrakill.jpg"}}/>
          <Text style={styles.Friends}>Toby Howard</Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 5, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/QMqT7Tqr/7d1a5405c173248616c34a760e4bf55e.jpg"}}/>
          <Text style={styles.Friends}>Bud Cullen</Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 5, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/V6x0QWfn/180px-Sentinelprimeanimatedbattlemask.jpg"}}/>
          <Text style={styles.Friends}>Derrick Milne</Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 5, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/gJd1MfRZ/a85c739094814807544ea6ea4243f22d.jpg"}}/>
          <Text style={styles.Friends}>Jessie Figueroa</Text>
          </View>
          <View>
          <Image style={{height: 40, width: 40, top: 5, left: 5, borderRadius: 20}} source={{uri:"https://i.postimg.cc/ydHDYX3H/ef5cccf401166ba9154039a39fdb29ee.jpg"}}/>
          <Text style={styles.Friends}>Dominic Fenix</Text>
          </View>
          <View style={styles.BackButton}>
          <Link href={"../ExplorerPage/ExplorerPageScreen"}>
          <Icon name='arrow-left' size={50} color={'#003855'}></Icon>
          </Link>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  BackButton: {
    borderWidth: 1, top: 220, left: 0,backgroundColor: "#026471", paddingBottom: 60, borderColor: "#026471", paddingStart: 25,

  },
Friends: {
  fontSize: 40,
  top: -40,
  left: 50,
},
IconFriends: {
  top: 100,
  right: 175,
  alignSelf: "center",
  height: 30,
  width: 30
}

});