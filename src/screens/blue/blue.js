import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Blue({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Green')}>
        <Text>Green</Text>
      </TouchableOpacity>
    </View>
  );
}
