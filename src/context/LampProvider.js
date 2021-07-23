import React,{createContext,useReducer} from "react"
import {LampReducer}  from "./LampReducer"
export const LampContext = createContext();



const ContextLamp = ({children})=>{

    const lampState ={
        bluetoothState:false,
        bluetoothData:null,
        hosts:[]
    }

    const [lamp,dispatch] = useReducer(LampReducer,lampState)
    return(
        <LampContext.Provider value={{lamp,dispatch}}>
            {children}
        </LampContext.Provider>
    )
}
export default ContextLamp