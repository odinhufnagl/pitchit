import React from 'react'
import {View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, BackHandler} from "react-native";
import styles from "./styles";

import Button from "./components/Button";
import { useNavigation, NavigationActions } from "@react-navigation/native";
import REGISTER_USER_MUTATION from "../../mutations/REGISTER_USER_MUTATION";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {token_key, refresh_token_key} from '../../token_key';
import { useRef } from 'react/cjs/react.development';
import ip_adress from "../../ip_adress"
import USER_QUERY from '../../queries/USER_QUERY';
import user from '../../current_user';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UPDATE_FIRST_AND_LASTNAME_MUTATION from '../../mutations/UPDATE_FIRST_AND_LASTNAME_MUTATION';
const SigninScreen = (props) => {
    const navigation = useNavigation();
    const emailInput = useRef("");
    const usernameInput = useRef("");
    const password1Input = useRef("");
    const password2Input = useRef("");
    const firstnameInput = useRef("");
    const lastnameInput = useRef("");
    const saveToken = async (token, refreshToken) => {
      
        await SecureStore.setItemAsync(token_key, token)
        await SecureStore.setItemAsync(refresh_token_key, refreshToken)
     
    }


    const signupUser = async () => {

        if (emailInput.current == "" || usernameInput.current == "" || password1Input.current == "" || password2Input.current == "" || firstnameInput.current == "" || lastnameInput.current == ""){
            alert("You must fill all in")
        }
        

        else {
      
       
        const queryResult = await axios.post(ip_adress, {query: REGISTER_USER_MUTATION, variables: {email: emailInput.current, username: usernameInput.current, password1: password1Input.current, password2: password2Input.current}})
  
        if (queryResult.data.data.register.success){
      
           
            saveToken(queryResult.data.data.register.token, queryResult.data.data.register.refreshToken)
          
            const queryResult1 = await axios.post(ip_adress, {query: USER_QUERY, variables: {username: usernameInput.current}})
            user.setUser(queryResult1.data.data.user)
  
            const queryResult2 = await axios.post(ip_adress, {query: UPDATE_FIRST_AND_LASTNAME_MUTATION, variables: {id: queryResult1.data.data.user.id, firstname: firstnameInput.current, lastname: lastnameInput.current}})
           
            props.login()
                
        }
        else if (!queryResult.data.data.register.success){
            alert((queryResult.data.data.register.errors.username != undefined ? queryResult.data.data.register.errors.username[0].message : "") + (queryResult.data.data.register.errors.email != undefined ? " " + queryResult.data.data.register.errors.email[0].message: "") + (queryResult.data.data.register.errors.password2 != undefined ? " " + queryResult.data.data.register.errors.password2[0].message : ""))
        }
    }
    }
    return (

   
        <KeyboardAwareScrollView style={styles.screen} resetScrollToCoords={{x:0, y:0}} showsVerticalScrollIndicator={false}>
           <View style={{width: "100%", justifyContent: "center", alignItems: "center", marginTop: 90}}>

            <TextInput style={styles.inputcontainer} placeholder={"email"} onChangeText={(value) => {emailInput.current = value}} ></TextInput>
            <TextInput style={styles.inputcontainer} placeholder={"username"} onChangeText={(value) => {usernameInput.current = value}} ></TextInput>
            <TextInput style={styles.inputcontainer} placeholder={"first name"} onChangeText={(value) => {firstnameInput.current = value}} ></TextInput>
            <TextInput style={styles.inputcontainer} placeholder={"last name"} onChangeText={(value) => {lastnameInput.current = value}} ></TextInput>
            
            
            <TextInput style={styles.inputcontainer} placeholder={"password"} onChangeText={(value) => {password1Input.current = value}} ></TextInput>
            <TextInput style={styles.inputcontainer} placeholder={"confirm password"} onChangeText={(value) => {password2Input.current = value}} ></TextInput>
            <TouchableOpacity onPress={() => {signupUser()}}>

            <Button></Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>

            <View style={{flexDirection: "row"}}>

            <Text style={{color: "#000000", fontFamily: "Roboto", fontSize: 16, alignItems: "center", justifyContent: "center"}}>Already have an account? </Text>
             <Text style={{color: "#000000", fontFamily: "Roboto", fontWeight: "bold", fontSize: 16}}>Log in</Text>
            
            </View>
            </TouchableOpacity>
           </View>
        </KeyboardAwareScrollView>
    )
}

export default SigninScreen;