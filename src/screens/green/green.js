import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Green({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Black')}>
        <Text>Black</Text>
      </TouchableOpacity>
    </View>
  );
}
