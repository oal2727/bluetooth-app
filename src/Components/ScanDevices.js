import React from "react"
import Icon from "react-native-vector-icons/FontAwesome"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import DefaulTheme from "../constants/DefaultTheme"
const {primary} = DefaulTheme.colors
const ScanDevices = ()=>{
    return(
       
             <View style={styles.boxIcon}>
                  <TouchableOpacity onPress={onPress}>
            <Icon
                style={styles.btnSearch}
                    name="search"
                    />
                     </TouchableOpacity>
        </View>
       
       
    )
}

const styles = StyleSheet.create({
    boxIcon:{
        position:'absolute',
        width:45,
        height:45,
        borderRadius:30,
        bottom:30,
        right:20,
        backgroundColor:primary,
        elevation:5,
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.5,
        shadowRadius:3
    },
    btnSearch:{
        textAlign:"center",
        fontSize:25,
        color:"white",
        lineHeight:43
    }
})
export default ScanDevices;