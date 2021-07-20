import React from "react"
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"
import DefaulTheme from "../constants/DefaultTheme"
import Icon from "react-native-vector-icons/FontAwesome"
const {dark,enable,disable} = DefaulTheme.colors
const ButtonState = ({active,onPress,containerStyle})=>{
    return(
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            <View style={styles.buttonStyle}>
                {
                    active ?
                    <Text style={styles.enable}>Enceder <Icon 
                    name="power-off"
                    size={20}
                    /></Text>
                    :
                    <Text style={styles.disable}>Apagar <Icon 
                    name="power-off"
                    size={20}
                    /></Text>
                }
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor:dark,
        width:150,
        height:30,
        borderRadius:25
    },
    enable:{
        color:enable,
        fontSize:17,
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        lineHeight:30,
        fontFamily:"Quicksand-SemiBold",
    },
    disable:{
        color:disable,
        fontSize:17,
        justifyContent:"center",
        alignSelf:"center",
        lineHeight:30,
        fontFamily:"Quicksand-SemiBold",
    }

})

export default ButtonState;