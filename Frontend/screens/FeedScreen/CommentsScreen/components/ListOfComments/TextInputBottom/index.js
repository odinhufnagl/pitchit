import React from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import { createRef, useRef, useState } from "react/cjs/react.development";
import CREATE_COMMENT_MUTATION from "../../../../../../mutations/CREATE_COMMENT_MUTATION";
import axios from "axios";
import { useNavigation, NavigationActions, useRoute } from "@react-navigation/native";
import user from "../../../../../../current_user";
import ip_adress from "../../../../../../ip_adress";

const TextInputBottom = (props) => {
    var textInputRef = createRef();
    var textInputValue = useRef();
    const route = useRoute();
    
    
    const createComment = async (text) => {
   
        textInputRef.current.clear();
        const returnedQuery = await axios.post(ip_adress, {query: CREATE_COMMENT_MUTATION, variables: {postId: props.postId, createdBy: user.getUser().id, content: text}})
     
       
        props.comments.unshift(returnedQuery.data.data.createComment.comment);
      
       
        props.refreshComments();
        route.params.addCountToComments(props.comments.length);
    }

    return (
    <View style={{width: "100%", alignItems: "center", paddingTop: 20, paddingBottom: 20,}}>
                       <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 330}}>
                        <TextInput ref={textInputRef} style={styles.textInput} placeholder={"Add comment"} onChangeText={(value) => {textInputValue.current = value}}></TextInput>
                        <TouchableOpacity onPress={() => createComment(textInputValue.current)}>

                        <SimpleLineIcon name={"paper-plane"} size={25} style={{opacity: 0.8}}></SimpleLineIcon>
                      </TouchableOpacity>
                        </View>
                        </View>
                       
    );




}


export default TextInputBottom;