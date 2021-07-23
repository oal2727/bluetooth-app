import React from "react"
import {View,Text,Modal,StyleSheet,Dimensions} from "react-native";
import {
    DotIndicator
  } from 'react-native-indicators';
import DefaultTheme from "../constants/DefaultTheme"

const {width,height} = Dimensions.get("window")
const {primary,transparentColor} = DefaultTheme.colors
const ModalLoading = ({visible})=>{
   return(
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    style={{backgroundColor:"green"}}
  >
     <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <DotIndicator color={primary} 
              size={13} 
             />
              <View style={{marginTop:20}}>
              <Text style={styles.modalText}>Cargando,</Text>
              <Text style={styles.modalText}>Espere unos Segundos</Text>
              </View>

          </View>
        </View>
  </Modal>
   )
}
const styles = StyleSheet.create({
    centeredView: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      top:0,
      backgroundColor:transparentColor
    },
    modalView: {
        margin: 20,
        width:width/1.8,
      height:150,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      textAlign: "center",
      width:width/1.3,
      color:"black",
      marginTop:5,
      fontSize:16
    }
  });
  
export default ModalLoading;