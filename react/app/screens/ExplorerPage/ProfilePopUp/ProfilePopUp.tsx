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
         <TouchableOpacity>
           <Icon style={styles.openButton} onPress={openModal} name="user" size={30} color="black"></Icon>
         </TouchableOpacity>
        
         <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={closeModal}>
         <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text> Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</Text>
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
        flex: 1,
        justifyContent: 'center',
    },
    openButton: {
        height: 40,
        marginHorizontal: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%'
    },
    modalText: {
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 10,
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

