import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from "@react-navigation/stack";
import BottomTabNavigator from "../BottomTabNavigator";
import ComponentScreen from "../../screens/FeedScreen/CommentsScreen";
import { NavigationContainer } from '@react-navigation/native';
import CreatePostScreen from "../../screens/FeedScreen/CreatePostScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import LoginScreen from "../../screens/LoginScreen";
import SigninScreen from "../../screens/SigninScreen";
import { useState } from "react/cjs/react.development";

import * as SecureStore from "expo-secure-store";
import {token_key, refresh_token_key} from "../../token_key";
import VERIFY_TOKEN_MUTATION from "../../mutations/VERIFY_TOKEN_MUTATION";
import CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION from "../../mutations/CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION";
import ip_adress from "../../ip_adress";
import { useEffect } from 'react/cjs/react.development';
import axios from "axios";
import { useSafeArea } from "react-native-safe-area-context";
import USER_LIST_QUERY from "../../queries/USER_LIST_QUERY";
import user from "../../current_user";
import USER_QUERY from "../../queries/USER_QUERY";
import UsersListScreen from "../../WideUsedComponents/UsersListScreen";
import CreateForumScreen from "../../screens/ForumScreen/CreateForumScreen";
import AnswersScreen from "../../screens/ForumScreen/AnswersScreen";




const StackNavigator = createStackNavigator();



const OuterNavigator = (props) => {
    
   

    return (
        


        

        <StackNavigator.Navigator
        screenOptions={{headerShown: false}}>
           

           
            <StackNavigator.Screen
            
            name={"BottomTabNavigator"}
        
            > 
            {() => <BottomTabNavigator logout={() => {props.logout()}}></BottomTabNavigator>}

            </StackNavigator.Screen>
         
       
            <StackNavigator.Screen
            name={"Comments"}
            component={ComponentScreen}
            >

            </StackNavigator.Screen>

            <StackNavigator.Screen
            name={"Userslist"}
            component={UsersListScreen}
            >
            </StackNavigator.Screen>

            <StackNavigator.Screen
            name={"CreatePost"}
            component={CreatePostScreen}>

            </StackNavigator.Screen>

            <StackNavigator.Screen
            name={"CreateForum"}
            component={CreateForumScreen}>

            </StackNavigator.Screen>

            <StackNavigator.Screen
            name={"AnswersForum"}
            component={AnswersScreen}>

            </StackNavigator.Screen>

            <StackNavigator.Screen

                name={"ProfileScreen"}
              
                >
                    {() => <ProfileScreen ></ProfileScreen>}
                </StackNavigator.Screen>

          


        </StackNavigator.Navigator>
  
    )
         

}

export default OuterNavigator;