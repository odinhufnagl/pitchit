import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Header from "./Header";
import styles from "./styles";
import Button from "./Button";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRef } from 'react/cjs/react.development';
import axios from 'axios';
import ip_adress from '../../../ip_adress';
import CREATE_POST_FORUM_MUTATION from '../../../mutations/CREATE_POST_FORUM_MUTATION';
import user from '../../../current_user';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
const CreateForumScreen = () => {
    const inputTitleRef = useRef("");
    const inputBodyRef = useRef("");
    const navigation = useNavigation();



    const createPost = async () => {
        console.log(inputTitleRef.current)
        if (inputTitleRef.current == ""){
            alert("Title can not be empty")
        }
        else {
            const queryResult = await axios.post(ip_adress, {query: CREATE_POST_FORUM_MUTATION, variables: {title: inputTitleRef.current, body: inputBodyRef.current, createdBy: user.getUser().id}})    
            navigation.goBack()                      
        }
        
    }
    return (
        <KeyboardAwareScrollView resetScrollToCoords={{x:0, y:0}} showsVerticalScrollIndicator={false} style={{flex: 1}}>
             <Header></Header>

                 <Text style={{marginHorizontal: 30, textAlign: "center", marginTop: 50, marginBottom: 80, fontSize: 24, fontFamily: "Roboto", fontWeight: "bold", alignSelf: "center"}}>Ask for ideas or improvement on your ideas, or just share a thought</Text>
             <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <TextInput style={styles.inputcontainer} placeholder={"Title"} onChangeText={(value) => {inputTitleRef.current = value}}></TextInput>
            <TextInput style={styles.biginputcontainer} placeholder={"Body"} onChangeText={(value) => {inputBodyRef.current = value}}></TextInput>
            <TouchableOpacity onPress={() => {createPost()}}>

            <Button></Button>
            </TouchableOpacity>
             </View>
            
            </KeyboardAwareScrollView>
    )
}

export default CreateForumScreen;