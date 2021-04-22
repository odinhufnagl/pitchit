import { StatusBar } from 'expo-status-bar';
import React from 'react';

import HomeStackScreen from "../Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FoundationIcon from "react-native-vector-icons/Foundation";

import FeatherIcon from "react-native-vector-icons/Feather";
import StartScreen from "../../screens/StartScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
    
  return (


    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        
        tabBarIcon: (props) => {
          const size = 28
          
          const color = props.color; 
          
         
          if (route.name === 'Home') {
            return <FeatherIcon name={"home"} size={size} color={color} />;
          }
         
          if (route.name === "Explore"){
            return <FeatherIcon name={"compass"} size={size} color={color} />;
          
          }
          if (route.name === "Search"){
              return <FeatherIcon name={"search"} size={size} color={color} />;
          }
          if (route.name === "Profile"){
            return <FeatherIcon name={"user"} size={size} color={color} />;
          }
        
         
      
        },
      })}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        
        style: {
           
            elevation: 0,
            borderTopColor: "#e8e8e8",
            borderTopWidth: 1,
            height: 55,
            
        
          
          
  
       
         
         
        },
        activeTintColor: "#000000",
        inactiveTintColor: "#bebebe",
        
        
      }}
    >
   
      <Tab.Screen name="Home" component={HomeStackScreen}></Tab.Screen>
    
      <Tab.Screen name="Explore" component={StartScreen}></Tab.Screen>

      <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
  
      <Tab.Screen name="Profile">{() => <ProfileScreen logout={() => {props.logout()}}></ProfileScreen>}</Tab.Screen>
    </Tab.Navigator>
  
    );

    
}


export default BottomTabNavigator;

