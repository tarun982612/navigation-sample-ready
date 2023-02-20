import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Red from '@screens/red/red';
import White from '@screens/white/white';
import Blue from '@screens/blue/blue';
import Green from '@screens/green/green';
import Black from '@screens/black/black';

const Stack = createNativeStackNavigator();

export default function Authnavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Red"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Red" component={Red} />
      <Stack.Screen name="White" component={White} />
      <Stack.Screen name="Black" component={Black} />
      <Stack.Screen name="Green" component={Green} />
      <Stack.Screen name="Blue" component={Blue} />
    </Stack.Navigator>
  );
}
