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

export default function LoginPopUp () {
    const [modalVisible, setModalVisible] = useState(false);
    
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const [text, putUser] = React.useState("User ID:");
    const [text2, putEmail] = React.useState("Email:");
    const [text3, putPassword] = React.useState("Password:");

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.openButton}>
        <Text style={styles.title} selectable={true}>Login</Text>
      </TouchableOpacity>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
        <TextInput
        style={styles.textInputs}
        onChangeText={putUser}
        value={text}
        />
        <TextInput
        style={styles.textInputs}
        onChangeText={putEmail}
        value={text2}
        />
        <TextInput
          style={styles.textInputs}
         onChangeText={putPassword}
         value={text3}
        />
          <View style={styles.closeButton}> 
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.modalText}>X</Text>
            </TouchableOpacity>       
          </View>
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {

  },
  create: {
    flex: 5,
    padding: 20,
    backgroundColor: "#eaeaea",
  },
  title: {
    textAlign: "center",
    // marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderWidth: 6,
    borderColor: "#20232a",
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 100,
    fontWeight: "bold",
    top: 500,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 100,
    alignSelf: 'flex-end',
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
  textInputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  openButton: {
    flex: 1,
    alignSelf: "center",
    top: -60
},
});
