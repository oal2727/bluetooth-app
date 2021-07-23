import React,{useState,useContext} from "react"
import {Text,View,StyleSheet,
    TouchableOpacity,Image,Dimensions} from "react-native"
import DefaulTheme from "../constants/DefaultTheme"
const {primaryDark,header} = DefaulTheme.colors
import Icon from "react-native-vector-icons/FontAwesome"
import ButtonState from "../Components/ButtonState"
import BluetoothSerial  from "react-native-bluetooth-serial-next"
import Footer from "../Components/Footer"
import {fontName} from "../constants/fontName"
import Header from "../Components/Header"
import {LampContext} from "../context/LampProvider"
const encendido = require("../assets/images/lampara_encendido.png")
const apagado = require("../assets/images/lampara_apagado.png")
const {width,height} = Dimensions.get("window")

const Dashboard = ({navigation})=>{
    const [active,setActive] = useState(true)
    const {lamp} = useContext(LampContext)
    const switchState = ()=>{
        setActive(!active);
        if(active){
            toogleSwitchLed("A")
        }else{
            toogleSwitchLed("B")
        }
    }
    const toogleSwitchLed = (data)=>{
        BluetoothSerial.write(data)
        .then((res) => {
          console.log('Successfuly wrote to device')
        })
        .catch((err) => console.log(err.message))
    }
    return(
        <View style={{flex:1}}>
               <Header 
            showArrowBack={false}
            description={"Inicio"} />
            <Text style={styles.title}>Lampara App</Text>
            <View style={{marginTop:30,alignSelf:"center"}}>
          
                {
                    lamp.bluetoothData != null ?
                    <View style={{flexDirection:"column",alignSelf:"center"}}>
                    <Text style={styles.titleConnect}>Conectado con el dispositivo</Text>
                    <Text style={styles.titleDevice}
                          numberOfLines={2}
                          ellipsizeMode="tail"
                    >{lamp.bluetoothData.name}</Text>
                      <ButtonState 
                    containerStyle={styles.button}
                    onPress={()=>switchState()}
                    active={active}/>
                    </View>
                  
                    : 
                    <Text style={styles.titleConnect}>Requerido Conectarse con el dispositivo*</Text>
                }

                <Image source={active ? apagado : encendido} style={styles.iconLamp} />
                
                <TouchableOpacity
                onPress={()=> navigation.navigate("BluetoothScreen")} >
                    <Text style={styles.listText}>Lista de Dispositvos Bluetooth <Icon
                    name="chevron-right"
                    size={18}
                    /></Text>
                </TouchableOpacity>
            </View>
            <Footer/>
        </View>
    )   
}
const styles = StyleSheet.create({
    title:{
        fontFamily:"Quicksand-Bold",
        fontSize:22,
        textAlign:"center",
        marginTop:20,
        color:primaryDark
    },
    titleConnect:{
        fontSize:17,
        marginLeft:30,
        fontFamily:"Quicksand-Medium",
       
    },
    titleDevice:{
        fontSize:18,
        marginTop:10,
        fontFamily:"Quicksand-Medium",
        alignSelf:"center",
        textAlign:"center",
        width:width/1.3,
        color:header
    },
    button:{
        alignSelf:"center",
        marginTop:20
    },
    listText:{
        marginTop:30,
        fontSize:18,
        fontFamily:"Quicksand-Medium",
        textAlign:"center"
    },
    iconLamp:{
        width:100,
        height:100,
        alignSelf:"center",
        marginTop:10
    }
})

export default Dashboard;