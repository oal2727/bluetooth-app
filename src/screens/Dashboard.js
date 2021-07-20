import React,{useState} from "react"
import {Text,View,StyleSheet,TouchableOpacity} from "react-native"
import DefaulTheme from "../constants/DefaultTheme"
const {primaryDark} = DefaulTheme.colors
import Icon from "react-native-vector-icons/FontAwesome"
import ButtonState from "../Components/ButtonState"
const Dashboard = ({navigation})=>{
    const [active,setActive] = useState(true)
    const [name,setName] = useState(null)
    const [device,setDevice] = useState(null)
    // const defineDevices = (values)=>{
    //     console.log(values)
    // }
    return(
        <View>
            <Text style={styles.title}>Proyecto Arduino with bluetooth</Text>
            <View style={{marginTop:30,alignSelf:"center"}}>
            <View style={{flexDirection:"column",alignSelf:"center"}}>
            <Text style={styles.titleConnect}>Conectado con el dispositivo</Text>
                <Text style={{textAlign:"center"}}>{device == null ? null : device.name}</Text>
            </View>
                <ButtonState 
                containerStyle={styles.button}
                onPress={()=>setActive(!active)}
                active={active}/>
                <TouchableOpacity
                onPress={()=> navigation.navigate("BluetoothScreen",{
                    setDevice:setDevice
                })} >
                    <Text style={styles.listText}>Lista de Dispositvos Bluetooth <Icon
                    name="chevron-right"
                    size={18}
                    /></Text>
                </TouchableOpacity>
            </View>
        </View>
    )   
}
const styles = StyleSheet.create({
    title:{
        fontFamily:"Quicksand-Bold",
        fontSize:20,
        textAlign:"center",
        marginTop:20,
        color:primaryDark
    },
    titleConnect:{
        fontSize:17,
        marginLeft:30
    },
    button:{
        alignSelf:"center",
        marginTop:20
    },
    listText:{
        marginTop:20,
        fontSize:21,
    },
})

export default Dashboard;