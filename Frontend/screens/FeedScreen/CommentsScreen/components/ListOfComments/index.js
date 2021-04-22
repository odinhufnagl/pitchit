
import React from "react";

import { Text, View,TextInput, FlatList} from "react-native";

import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import TextInputBottom from "./TextInputBottom";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Comment from "../Comment";

import CREATE_COMMENT_MUTATION from "../../../../../mutations/CREATE_COMMENT_MUTATION";
import axios from "axios";
import { createRef, useRef, useState } from "react/cjs/react.development";
import { useNavigation, NavigationActions, useRoute } from "@react-navigation/native";
import Header from "../Header";



const ListOfComments = (props) => {
    //remeber when new comment is clikced all comments is count is updated. Look further into this beacuse we want this to maybe happen when we send a message
    const navigation = useNavigation();
   
    var flatListRef = createRef();
    const [tempState, setTempState] = useState(false);
    const route = useRoute();
    
    const postId = route.params.postId;
    const comments = route.params.comments;
  
 
   

    


    const renderComment = ({item}) => {
      return (
      <Comment data={item}></Comment>
      )
    }

    const refreshComments = () => {
      setTempState(!tempState);
    }
  

    
    return (
        <View style={{backgroundColor: "white", width: "100%", height: "100%"}}>
          <Header></Header>

          <FlatList  extraData={comments} data={comments} renderItem={renderComment} showsVerticalScrollIndicator={false} ref={flatListRef} key={"comments"} style={{marginTop: 10}}
          ></FlatList>
          <TextInputBottom comments={comments} postId={postId} refreshComments={refreshComments}></TextInputBottom>
          
    
          </View>
        )
    

}



export default ListOfComments;