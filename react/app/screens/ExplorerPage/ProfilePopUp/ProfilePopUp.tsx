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
        if(modalVisible){
            setModalVisible(false)
        }else{
            setModalVisible(true)
        }
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
             animationType='fade'
             transparent={true}
             visible={modalVisible}
             onRequestClose={closeModal}>
             <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                 <Text style={{color: "#30B18A", top: 5, fontSize: 20 }}>Name</Text>
                 <Text style={{color:"white", top: 10}}>Name: Whirl C. Milne</Text>
                 <Text style={{color:"#30B18A", top: 40, fontSize: 20}}>Trees</Text>
                 <Text style={{color: 'white', top:45}}>2</Text>
                 <Text style={{color:"#30B18A", top: 65, fontSize: 20}}>About me: </Text>
                 <Text style={{color:"white", top: 80}}>Hi, my name is Willy!</Text>
                 <Link style={{color:"#30B18A", top: 145, left: 4, borderWidth: 1, width: 120, backgroundColor: '#0CBEA2', borderColor: '#0CBEA2', borderBottomColor: "blue", borderBottomWidth: 10 }} href={'../TreeTimeScreen/TreeTime'} onPress={closeModal}>
                 <Icon  name="tree" size={40} color={'#ACE2F0'}></Icon>
                 <Text style={{color: '#ACE2F0'}}>my forest</Text>
                 </Link>
                 <Icon style={{color:"#30B18A", top: -165, left: 230}}name="pencil-alt" size={35}></Icon>
                 <TouchableOpacity style={styles.closeButton}>
                 <Link href={''}>
                 <Text style={styles.modalText}>
                    Log out
                    </Text>
                    </Link>
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
        backgroundColor: '#065064',
        padding: 20,
        borderWidth: 5,
        borderColor: '#30B18A',
        borderRadius: 25,
        width: '80%'
    },
    modalText: {
        fontSize: 30,
        color: "white",
        borderWidth: 10,
        borderRadius: 15, 
        borderColor: "red",
    },
    closeButton: {
        marginTop: 70,
        alignSelf: 'flex-end',
        borderRadius: 20,
        backgroundColor: 'red',
        fontSize: 20
    },
    closeButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    IconsForPopUp: {
        borderWidth: 1, top: -125, left: 0,backgroundColor: "#026471", paddingBottom: 70, borderColor: "#026471",
        },
});

