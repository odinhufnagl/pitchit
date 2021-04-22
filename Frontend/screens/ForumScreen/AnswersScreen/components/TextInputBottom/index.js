import React from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import { createRef, useRef, useState } from "react/cjs/react.development";

import axios from "axios";
import { useNavigation, NavigationActions, useRoute } from "@react-navigation/native";

import CREATE_COMMENT_FORUM_MUTATION from "../../../../../mutations/CREATE_COMMENT_FORUM_MUTATION";
import ip_adress from "../../../../../ip_adress";
import user from "../../../../../current_user";

const TextInputBottom = (props) => {
    var textInputRef = createRef();
    var textInputValue = useRef();
    console.log(props.answers, "huhuu")
    console.log(props.curPostId)

   
    
    
    const createAnswer = async (text) => {
    
   
        textInputRef.current.clear();
        const returnedQuery = await axios.post(ip_adress, {query: CREATE_COMMENT_FORUM_MUTATION,variables: {postForumId: props.curPostId, createdBy: user.getUser().id, content: text}})
     
  
        props.answers.push(returnedQuery.data.data.createCommentForum.commentforum);
      
       
        
    }

    return (
    <View style={{width: "100%", alignItems: "center", paddingTop: 20, paddingBottom: 20,}}>
                       <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 330}}>
                        <TextInput ref={textInputRef} style={styles.textInput} placeholder={"Add comment"} onChangeText={(value) => {textInputValue.current = value}}></TextInput>
                        <TouchableOpacity onPress={() => createAnswer(textInputValue.current)}>

                        <SimpleLineIcon name={"paper-plane"} size={25} style={{opacity: 0.8}}></SimpleLineIcon>
                      </TouchableOpacity>
                        </View>
                        </View>
                       
    );




}


export default TextInputBottom;