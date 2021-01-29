import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import Signup from "../Screens/Signup";
import WelcomeScreen from '../Screens/WelcomeScreen';
const Stack = createStackNavigator();


const RootStackScreen =({navigation})=>{
    <RootStack.Navigator headerMode="none">
        <Stack.Screen name="WelcomeScreen" Component="WelcomeScreen"/>
        <Stack.Screen name="LoginScreen" Component="LoginScreen"/>
        <Stack.Screen name="Signup" Component="Signup"/>
    </RootStack.Navigator>
};

export default RootStackScreen;