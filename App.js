/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./src/navigation"
import LampContext from "./src/context/LampProvider"
const App= ()=> {
  return (
    <LampContext>
       <NavigationContainer>
         <Navigation/>
      </NavigationContainer>
    </LampContext>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  title:{
    fontSize:25
  }
});

export default App;
