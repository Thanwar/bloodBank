import React from 'react';

// Screens
import Login from '../Screens/login';
import Signup from '../Screens/signup';
import Main from '../Screens/Main';
import Signupcomplete from '../Screens/signupComplete';
import Centerlist from '../Screens/centerlist';
import Donarlist from '../Screens/Donarlist';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signupcomplete" component={Signupcomplete} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Centerlist" component={Centerlist} />
        <Stack.Screen name="Donarlist" component={Donarlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
