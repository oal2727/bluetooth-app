import React from "react"
import {View,Text,StyleSheet,Dimensions, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import DefaulTheme from "../constants/DefaultTheme"

const {header,transparent} = DefaulTheme.colors
const {width,height} = Dimensions.get("window")
const ItemBox = ({description,onPress})=>{
    return(
       <View style={styles.box}>
                 <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                <Icon
                    style={styles.containerIcon} 
                    name="bluetooth-b"
                    /><Text 
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.description}>{description}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Conectar</Text>
                </TouchableOpacity>

                 </View>
       </View>
    )
}
const styles = StyleSheet.create({
    box:{
        marginTop:20,
        height:null,
        padding:6,
        width:width/1.1,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor:header,
        elevation:5,
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.5,
        shadowRadius:3
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:10,
    },
    containerIcon:{
        marginTop:5,
        backgroundColor:transparent,
        width:35,
        height:35,
        fontSize:20,
        textAlign:"center",
        borderRadius:20,
        lineHeight:33
    },
    description:{
        marginLeft:10,
        textAlign:"left",
        fontSize:17,
        paddingTop:4,
        width:130,
        height:50,
        color:"white"
    },
    button:{
        marginTop:10,
        backgroundColor:transparent,
        width:100,
        height:30,
        padding:5,
        marginRight:20,
        borderRadius:10,
    },
    buttonText:{
        color:"black",
        alignSelf:"center",
        fontSize:14
    }
})
export default ItemBox;