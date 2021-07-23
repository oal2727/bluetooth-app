import React from "react"
import {View,Text,StyleSheet} from "react-native"
import DefaultTheme from "../constants/DefaultTheme"
const {light,header} = DefaultTheme.colors
const Footer = ()=>{
    return(
        <View style={styles.box}>
            <Text style={styles.boxText}>Developer: Dash</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    box:{
        backgroundColor:light,
        height:50,
        position:"absolute",
        right:0,
        bottom:0,
        left:0
    },
    boxText:{
        alignSelf:"center",
        fontSize:17,
        alignContent:"center",
        fontFamily:"Quicksand-Bold",
        color:"black",
        padding:10
    }
})
export default Footer;