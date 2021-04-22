
import React from 'react'

import { Text, View } from "react-native";
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../screens/LoginScreen';
import SigninScreen from '../../screens/SigninScreen';



const StackNavigator = createStackNavigator();


const LogInSignInNavigator = (props) => {




  
    return (

        <StackNavigator.Navigator screenOptions={{headerShown: false}}>



            <StackNavigator.Screen
            name={"Login"}
           >
               {() => <LoginScreen login={() => {props.login()}}></LoginScreen>}
            </StackNavigator.Screen>
            <StackNavigator.Screen
            name={"Signin"}
            >
                {() => <SigninScreen login={() => {props.login()}}></SigninScreen>}

            </StackNavigator.Screen>
        </StackNavigator.Navigator>




   
       
    )
}

export default LogInSignInNavigator;