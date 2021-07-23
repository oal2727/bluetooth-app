import React from "react"
import {View,Text,StyleSheet, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import DefaulTheme from "../constants/DefaultTheme"
import { useNavigation } from "@react-navigation/core"
const {header} = DefaulTheme.colors
const Header = ({description,showArrowBack})=>{
    const navigation = useNavigation()
    return(
       <View style={styles.container}>
           { showArrowBack ? 
             <TouchableOpacity  onPress={()=>navigation.goBack()}>
             <Icon
                 style={styles.containerIcon} 
                 name="chevron-left"
                 size={20}
                 />
                 </TouchableOpacity>
            :
             null
             }
               <Text style={styles.title}> {description}</Text>
       </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:header,
        height:60,
        flexDirection:"row",
        elevation:5,
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.5,
        shadowRadius:3
    },
    containerIcon:{
        marginLeft:15,
        lineHeight:55,
        color:"white"
    },
    title:{
        fontFamily:"Quicksand-Bold",
        lineHeight:55,
        textAlign:"center",
        flex:1,
        color:"white",
        fontSize:16,
    }
})
export default Header;