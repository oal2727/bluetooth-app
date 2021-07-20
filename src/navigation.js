import React from "react"
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "./screens/Dashboard"
import BluetoothScreen from "./screens/BluetoothScreen";



const Stack = createStackNavigator();

const Navigation = ()=>{
    return(
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="BluetoothScreen" component={BluetoothScreen} />
        </Stack.Navigator>
    )

}
export default Navigation;