import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Black({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Red')}>
        <Text style={{color: 'white'}}>RED</Text>
      </TouchableOpacity>
    </View>
  );
}
