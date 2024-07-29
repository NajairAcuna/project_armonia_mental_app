import { withTheme } from "@rneui/themed";
import React, { useState } from "react"
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Svg, { Circle } from 'react-native-svg';
import { Link } from "expo-router";


export default function ProfilePopUp (){
    const [modalVisible, setModalVisible] = useState(false);
   
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
         <TouchableOpacity  onPress={openModal}>
         <Image style={styles.openButton}  source={{uri:"https://i.postimg.cc/tRdpRdVr/1273655-squarerootofdestiny-whirl-icon-commission.jpg"}} onProgress={openModal}/>
         </TouchableOpacity>
         <Modal
         animationType="fade"
         transparent={true}
         visible={modalVisible}
         onRequestClose={closeModal}>
         <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={{color:"white", top: 10}}>Name: Whirl C. Milne</Text>
                <Text style={{color:"white", top: 65}}>Trees: 2 </Text>
                <Text style={{color:"white", top: 75}}>About me: </Text>
                <Text style={{color:"white", top: 80}}>Hi, my name is Willy!</Text>
                <Icon style={{color:"#38D085", top: 180, left: 20}} name="tree" size={40}></Icon>
                <Icon style={{color:"#38D085", top: -120, left: 230}}name="pencil-alt" size={35}></Icon>
             <TouchableOpacity style={styles.closeButton} onPress={closeModal}>

             <Text style={styles.modalText}>
                Log out
                </Text>

             </TouchableOpacity>
            </View>
          {/* <View style={{borderWidth: 1, top: 150,backgroundColor: "#026471", paddingBottom: -10, borderColor: "#026471", paddingHorizontal: 200, alignContent:'center'}}>
            <Icon name="user-friends" size={50} color={'white'} style={{width: 65, height: 65, right: 150}}></Icon>
            <Icon name="home" size={50} color={'white'} style={{width: 65, height: 65, top: -80}}></Icon>
            <Icon name="book" size={50} color={'white'} style={{width: 65, height: 65}}></Icon>
          </View> */}
          </View>
         </Modal>
        </View>
        

    );
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
       
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    openButton: {
        flex: -1,
        alignSelf: "center",
        top: 62,
        left: 10,
        height: 45,
        width: 45,
        borderRadius: 30
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#13A95F',
        padding: 20,
        borderWidth: 5,
        borderColor: '#38D085',
        borderRadius: 10,
        width: '80%'
    },
    modalText: {
        fontSize: 40,
        marginLeft: 10,
        marginBottom: 10,
        color: "white",
        borderWidth: 1,
        borderRadius: 20, 
        borderColor: "red",
        backgroundColor: 'red'
    },
    closeButton: {
        marginTop: 100,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    IconsForPopUp: {
        borderWidth: 1, top: -125, left: 0,backgroundColor: "#026471", paddingBottom: 70, borderColor: "#026471",
        },
});

