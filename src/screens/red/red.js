import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Red({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.5,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Blue')}>
          <Text>BLUE</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.5,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'green',
            height: responsiveHeight(25),
            width: responsiveWidth(80),
          }}></View>
      </View>
    </View>
  );
}
