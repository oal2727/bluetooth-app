import { transform } from "@babel/core"
import React,{useState} from "react"
import {Text,View,Switch,StyleSheet,Dimensions,Alert, FlatList} from "react-native"
import BluetoothSerial, { disable } from "react-native-bluetooth-serial-next"
import Header from "../Components/Header"
import ItemBox from "../Components/ItemBox"
import DefaulTheme from "../constants/DefaultTheme"
import { useNavigation } from "@react-navigation/core"
import ScanDevices from "../Components/ScanDevices"
const {header,light,text,primary,dark} = DefaulTheme.colors
const {width,height} = Dimensions.get("window")

const BluetoothScreen = (props)=>{

    const navigation = useNavigation()
    const datos=[
        {id:1,nombre:"Carlos"},
        {id:2,nombre:"Pepe"}
    ]
    const [isEnabled, setIsEnabled] = useState(false);
    const [hosts,setHost] = useState([])
    const listHosts = async ()=>{
        const list = await BluetoothSerial.list()
        // console.log(list)
        setHost(list)
    }

    React.useEffect(()=>{
         BluetoothSerial.on('bluetoothEnabled', () => {
            Promise.all([
              BluetoothSerial.isEnabled(),
              BluetoothSerial.list()
            ])
            .then((values) => {
              const [ isEnabled, devices ] = values
            //   console.log(devices)
              setHost(devices)
            })
            BluetoothSerial.on('bluetoothDisabled', () => {
                setHost([])
            })
      
          })
    })

    const toggleSwitch = (val) => {
        console.log(val)
        if(val){
            enable()
        }else{
            disable()
        }
    };

    const enable= ()=>{
        BluetoothSerial.enable().then((res)=>{
            setIsEnabled(true)
            // listHosts()
        }).catch((err)=>console.log(err.message))
       
    }
    const disable = async()=>{
        BluetoothSerial.disable().then((res)=>{
            setIsEnabled(false)
            // setHost([])
        }).catch((err)=>console.log(err.message))
    }

    
    const connect= (item)=>{
        const {setDevice} = props.route.params
        // console.log(props.route.params)
        console.log(item)
        BluetoothSerial.connect(item.id).then((res)=>{
            Alert(`Conexion exitosamente al  ${item.name}`)
            setDevice(item)
            navigation.goBack()
        }).catch((err)=>{
            console.log(JSON.stringify(err))
        })
    }

    const SwitchButton = ()=>{
        return(
            <View>
                    <Switch
                    style={{transform:[{scaleX:1.5},{scaleY:1.2}]}}
        trackColor={{ false: dark, true: light }}
        thumbColor={isEnabled ? text : primary}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(val)=>toggleSwitch(val)}
        value={isEnabled}
      />
            </View>
        )
    }
   

    return(
        <View style={{flex:1}}>
            <Header 
            description={"DISPOSITIVOS DE BLUETOOTH"} />
            <View style={styles.bodyTitle}>
                <Text style={styles.textBody}>Bluetooth</Text>
                <SwitchButton/>
            </View>
            {
                hosts.map((item,index)=>{
                    return(
                        <ItemBox 
                        onPress={()=>connect(item)}
                        description={item.name}
                        />
                    )
                })
            }
            <ScanDevices/>
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
    textBody:{
        fontSize:20
    }
})

export default BluetoothScreen;