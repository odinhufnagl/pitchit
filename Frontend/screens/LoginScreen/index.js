import React, { useRef } from 'react'
import {View, Text, TouchableOpacity, TextInput, BackHandler, ProgressBarAndroidComponent} from "react-native";
import styles from "./styles";

import Button from "./components/Button";
import { useNavigation } from "@react-navigation/native";
import ip_adress from '../../ip_adress';
import TOKEN_AUTH_MUTATION from '../../mutations/TOKEN_AUTH_MUTATION';
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {token_key, refresh_token_key} from '../../token_key';
import { useEffect } from 'react/cjs/react.development';
import USER_QUERY from '../../queries/USER_QUERY';
import user from '../../current_user';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = (props) => {
    const navigation = useNavigation();

    const usernameInput = useRef("");
    const passwordInput = useRef("");
    
    
    const saveToken = async (token, refreshToken) => {
      
        await SecureStore.setItemAsync(token_key, token)
        await SecureStore.setItemAsync(refresh_token_key, refreshToken)
       
    
    }

    const loginUser = async () => {
     
           if (usernameInput.current == "" || passwordInput.current == ""){
               alert("Fill in both username and password")
           }
           else {
      
            const queryResult = await axios.post(ip_adress, {query: TOKEN_AUTH_MUTATION, variables: {username: usernameInput.current, password: passwordInput.current}})
      
            
            if (queryResult.data.data.tokenAuth.success){
                saveToken(queryResult.data.data.tokenAuth.token, queryResult.data.data.tokenAuth.refreshToken)
                const queryResult1 = await axios.post(ip_adress, {query: USER_QUERY, variables: {username: usernameInput.current}})
                user.setUser(queryResult1.data.data.user)
             
             
                
                props.login()
                
            }
            else if (queryResult.data.data.tokenAuth.success == false){
               
                alert("Username or password is wrong")
            }

           }
           
        }
   





        
    

    return (
        <KeyboardAwareScrollView resetScrollToCoords={{x:0, y:0}} showsVerticalScrollIndicator={false} >


        <View style={styles.screen}>
                        <Text style={{fontFamily: "Roboto", fontSize: 35, fontWeight: "bold", marginBottom: 30, }}>Log In</Text>
            
            <TextInput style={styles.inputcontainer} placeholder={"username"} onChangeText={(value) => {usernameInput.current = value}} ></TextInput>
            <TextInput style={styles.inputcontainer} placeholder={"password"} onChangeText={(value) => {passwordInput.current = value}} secureTextEntry={true}></TextInput>
            <TouchableOpacity onPress={() => {loginUser()}}>
            <Button></Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Signin")}}>

            <View style={{flexDirection: "row"}}>

            <Text style={{color: "#000000", fontFamily: "Roboto", fontSize: 16, alignItems: "center", justifyContent: "center"}}>Are you new? </Text>
             <Text style={{color: "#000000", fontFamily: "Roboto", fontWeight: "bold", fontSize: 16}}>Create an account</Text>
            
            </View>
            </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
    )
}

export default LoginScreen;