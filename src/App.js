import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stacknav from './navigation/stacknav';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
      }}>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <NavigationContainer>
        <Stacknav />
      </NavigationContainer>
    </View>
  );
}
