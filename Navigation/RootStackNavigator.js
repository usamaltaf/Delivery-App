import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import Signup from "../Screens/Signup";
import WelcomeScreen from '../Screens/WelcomeScreen';
const RootStack = createStackNavigator();

const RootStackScreen =({navigation})=>{
    <RootStack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
        <RootStack.Screen name="WelcomeScreen" Component={WelcomeScreen}/>
        <RootStack.Screen name="LoginScreen" Component={LoginScreen}/>
        <RootStack.Screen name="Signup" Component={Signup}/>
    </RootStack.Navigator>
};

export default RootStackScreen;