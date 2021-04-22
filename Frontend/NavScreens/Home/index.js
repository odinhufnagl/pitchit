import React from "react";
import FeedScreen from "../../screens/FeedScreen";
import ForumScreen from "../../screens/ForumScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from "react-native";





const Tab = createMaterialTopTabNavigator();

const HomeStackScreen = () => {


   return(
    <Tab.Navigator
    
    
    
    tabBarOptions={{
       
        
        indicatorStyle: {backgroundColor: "white"},
        inactiveTintColor: "#bebebe",
        activeTintColor: "#000000",
        tabBarPosition: 'top', 
        swipeEnabled: true,
        animationEnabled: true,
        style: {elevation: 0, height: 80, borderBottomWidth: 1, borderBottomColor: "#e8e8e8"},
        labelStyle: {fontSize: 25, fontFamily: "Roboto", marginTop: 20, textTransform: "capitalize", fontWeight: "bold", top: 2},
        
        
      }}
    
  
    
  
    >
        
    <Tab.Screen 
    name="Feed"
    component={FeedScreen}
    
    >
      
    </Tab.Screen>
    <Tab.Screen 
    name="Forum"
    component={ForumScreen}
    
    >
      
    </Tab.Screen>

    


</Tab.Navigator>
   );
}

export default HomeStackScreen;