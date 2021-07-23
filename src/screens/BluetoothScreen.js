import React,{useState,useContext} from "react"
import {Text,View,Switch,StyleSheet,Dimensions,Alert, FlatList} from "react-native"
import BluetoothSerial from "react-native-bluetooth-serial-next"
import Header from "../Components/Header"
import ItemBox from "../Components/ItemBox"
import DefaulTheme from "../constants/DefaultTheme"
import { useNavigation } from "@react-navigation/core"
import ButtonState from "../Components/ButtonState"
import ModalLoading from "../Components/Modal"
import {LampContext} from "../context/LampProvider"

const {header,light,text,primary,dark,transparentColor} = DefaulTheme.colors
const {width} = Dimensions.get("window")

const BluetoothScreen = ()=>{
    const {lamp,dispatch} = useContext(LampContext)
    const [modal,setModal] = useState(false);
    const navigation = useNavigation()

    const toggleSwitch = (val) => {
        if(val){
            enable()
        }else{
            disable()
        }
    };

    const enable= ()=>{
        setModal(true)
        BluetoothSerial.enable().then((res)=>{
            dispatch({type:"TOOGLE_BLUETOH",payload:true})
             Promise.all([
              BluetoothSerial.isEnabled(),
              BluetoothSerial.list()
            ])
            .then((values) => {
              const [ isEnabled, devices ] = values
              console.log(devices)
             setModal(false)
             dispatch({type:"SET_DEVICES",payload:devices})
            //   setHost(devices)
            })
        }).catch((err)=>{
            console.log(err.message)
            setModal(false)
        })
       
    }
    const disable = async()=>{
        setModal(true)
        BluetoothSerial.disable().then((res)=>{
            setModal(false)
            dispatch({type:"TOOGLE_BLUETOH",payload:false})
            dispatch({type:"SET_DEVICES",payload:[]})
            desconectar()
        }).catch((err)=>{
            console.log(err.message)
            setModal(false)
        })
    }

    const desconectar = async()=>{
        await BluetoothSerial.disconnect();
    }

    
    const connect= (item)=>{
        setModal(true)
        BluetoothSerial.connect(item.id).then((res)=>{
            setModal(false)
            Alert.alert(`Conexion exitosamente al  ${item.name}`)
            dispatch({type:"SET_BLUETOH",payload:item})
            navigation.goBack()
        }).catch((err)=>{
            setModal(false)
            Alert.alert(`Problema de conexion el dispositivo: ${item.name}`)
        })
    }
  


    const SwitchButton = ()=>{
        return(
            <View>
                    <Switch
                    style={{transform:[{scaleX:1.5},{scaleY:1.2}]}}
        trackColor={{ false: dark, true: light }}
        thumbColor={lamp.bluetoothState ? text : primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(val)=>toggleSwitch(val)}
        value={lamp.bluetoothState}
      />
            </View>
        )
    }
   

    return(
        <View style={{flex:1}}> 
            <Header 
            showArrowBack={true}
            description={"DISPOSITIVOS DE BLUETOOTH"} />
             <ModalLoading visible={modal}/>
            <View style={styles.bodyTitle}>
                <Text style={styles.textBody}>Bluetooth</Text>
                <SwitchButton/>
            </View>
            <View style={styles.line}/>
            {
                lamp.hosts.length ? 
                
                lamp.hosts.map((item,index)=>{
                    return(
                        <ItemBox 
                        key={item.id}
                        onPress={()=>connect(item)}
                        description={item.name}
                        />
                    )
                })
                : <Text style={styles.message}>No hay Dispositivos Disponibles...</Text>
            }
            {/* <ScanDevices
            onPress={()=>searchDevice()}/> */}
        </View>
    )   
}
const styles = StyleSheet.create({
    bodyTitle:{
        marginTop:20,
        flexDirection:"row",
        alignSelf:"center",
        width:width/1.1,
        justifyContent:"space-around",
    },
    line:{
        marginTop:20,
        borderWidth:1,
        borderColor:light
    },
    textBody:{
        fontSize:20
    },
    message:{
        marginTop:30,
        fontSize:15,
        fontFamily:"Quicksand-Bold",
        textAlign:"center"
    }
})

export default BluetoothScreen;