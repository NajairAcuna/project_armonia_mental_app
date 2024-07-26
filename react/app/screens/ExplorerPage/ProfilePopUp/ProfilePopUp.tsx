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
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle } from 'react-native-svg';


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
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={closeModal}>
         <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={{color:"#13aa5f", top: 10}}>Profile: Name Rod Magnus</Text>
                <Text style={{color:"#13aa5f", top: 75}}>About me: </Text>
                <Text style={{color:"#13aa5f", top: 80}}> Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</Text>
                <Icon style={{color:"#13aa5f", top: 145, left: 90}} name="tree" size={40}></Icon>
             <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
             <Text style={styles.modalText}>X</Text>
             </TouchableOpacity>
            </View>
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
    openButton: {
        flex: -1,
        alignSelf: "center",
        top: 62,
        left: 10,
        height: 45,
        width: 45,
        borderRadius: 22
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#065064',
        padding: 20,
        borderRadius: 8,
        width: '80%'
    },
    modalText: {
        fontSize: 40,
        marginLeft: 10,
        marginBottom: 10,
        color: "red"
    },
    closeButton: {
        marginTop: 100,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        color: 'black',
        fontWeight: 'bold',
    }
});

