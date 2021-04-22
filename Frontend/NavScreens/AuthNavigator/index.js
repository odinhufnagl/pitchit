


import React from 'react'
import { ShadowPropTypesIOS, Text, View } from "react-native";
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../screens/LoginScreen';
import FeedScreen from '../../screens/FeedScreen';
import OuterNavigator from '../OuterNavigator';
import * as SecureStore from "expo-secure-store";
import {token_key, refresh_token_key} from "../../token_key";
import VERIFY_TOKEN_MUTATION from "../../mutations/VERIFY_TOKEN_MUTATION";
import CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION from "../../mutations/CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION";
import ip_adress from "../../ip_adress";
import { useEffect, useState } from 'react/cjs/react.development';
import axios from "axios";
import { useSafeArea } from "react-native-safe-area-context";
import USER_LIST_QUERY from "../../queries/USER_LIST_QUERY";
import user from "../../current_user";
import USER_QUERY from "../../queries/USER_QUERY";
import { useNavigation, NavigationActions } from "@react-navigation/native";
import LogInSignInNavigator from '../LogInSignInNavigator';
import ListOfComments from '../../screens/FeedScreen/CommentsScreen/components/ListOfComments';

const StackNavigator = createStackNavigator();

class AuthNavigator extends React.Component {
    constructor(props){
        super(props);
        this.state = {loggedin: "e"};
    }
   
    

    getToken = async () => {
    
        let token = await SecureStore.getItemAsync(token_key)
        let refreshToken = await SecureStore.getItemAsync(refresh_token_key)
      
      
       
        if (token || refreshToken) {
      
        
     
        
      
          const queryResult1 = await axios.post(ip_adress, {query: VERIFY_TOKEN_MUTATION, variables: {token: token}})
         
          if (queryResult1.data.data.verifyToken.success){
           
            const queryResult3 = await axios.post(ip_adress, {query: USER_QUERY, variables: {username: queryResult1.data.data.verifyToken.payload.username}})
              user.setUser(queryResult3.data.data.user);
              
              this.setState({loggedin: true})
           
          }
          else {
    
            const queryResult2 = await axios.post(ip_adress, {query: CREATE_TOKEN_WITH_REFRESH_TOKEN_MUTATION, variables: {refreshToken: refreshToken}})
            if (queryResult2.data.data.createTokenWithRefreshToken.success){
              await SecureStore.setItemAsync(token_key, queryResult2.data.data.createTokenWithRefreshToken.token)
              const queryResult3 = await axios.post(ip_adress, {query: USER_QUERY, variables: {username: queryResult2.data.data.createTokenWithRefreshToken.payload.username}})
              user.setUser(queryResult3.data.data.user);
              this.setState({loggedin: true})
           
            }
            else {
                this.setState({loggedin: false})

            }
          
          }
    
    
        }
        else {
      
          
      
            this.setState({loggedin: false})
           
            

              
         
          
        }
        
      }
    
    componentDidMount() {
        this.getToken();
    }

  

       
        
        
    
    render() {

        if (this.state.loggedin == "e"){
            return (<View></View>)
        }
        else {
        return (
            <View style={{flex: 1}}>


           <NavigationContainer>
                  <StackNavigator.Navigator screenOptions={{headerShown: false}}>
    
            
    
                   {this.state.loggedin ?  
                    
                    <StackNavigator.Screen
                    name={"Home"}
                    >
                        {() => <OuterNavigator logout={() => {this.setState({loggedin: false})}}></OuterNavigator>}
    
                    </StackNavigator.Screen> : 
                    <StackNavigator.Screen
                    name={"LoginSignin"}
                    >{() => <LogInSignInNavigator login={() => {this.setState({loggedin: true})}}></LogInSignInNavigator>}
                    </StackNavigator.Screen>}
                </StackNavigator.Navigator>
    
    
    
    
            </NavigationContainer>
            </View>
        )
                   }
    
 
                }
    
}

export default AuthNavigator;