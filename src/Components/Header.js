import React from "react"
import {View,Text,StyleSheet, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import DefaulTheme from "../constants/DefaultTheme"
import { useNavigation } from "@react-navigation/core"
const {header} = DefaulTheme.colors
const Header = ({description})=>{
    const navigation = useNavigation()
    return(
       <View style={styles.container}>
                <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Icon
                    style={styles.containerIcon} 
                    name="chevron-left"
                    size={22}
                    />
                    </TouchableOpacity><Text style={styles.title}> {description}</Text>
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
        marginLeft:10,
        lineHeight:55,
        color:"white"
    },
    title:{
        marginLeft:10,
        lineHeight:55,
        color:"white",
        fontSize:15
    }
})
export default Header;