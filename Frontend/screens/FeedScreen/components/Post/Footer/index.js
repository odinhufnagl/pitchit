import React from "react";
import { Dimensions, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { createRef, useRef, useState } from "react/cjs/react.development";
import CREATE_LIKE_MUTATION from "../../../../../mutations/CREATE_LIKE_MUTATION";
import axios from "axios";

import DELETE_LIKE_MUTATION from "../../../../../mutations/DELETE_LIKE_MUTATION";
import POST_LIKES_LIST_QUERY from "../../../../../queries/POST_LIKES_LIST_QUERY";

import { useEffect } from "react";
import { useNavigation, NavigationActions } from "@react-navigation/native";
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia,Progressive } from "rn-placeholder";
import user from "../../../../../current_user";
import ip_adress from "../../../../../ip_adress";

const Footer = (props) => {
    /*this should be converted to class component to ref will work so we can increment comment*/
    
    const [likeClicked, setLikeClicked] = useState(false);
    const [plusOneLike, setPlusOneLike] = useState(false);
    const [minusOneLike, setMinusOneLike] = useState(false);
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const [plusCommentCounter, setPlusCommentCounter] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    
    
    

    useEffect(() => {
        
        (async () => {
            const isLikedFromBeginning = await axios.post(ip_adress, {query: POST_LIKES_LIST_QUERY, variables: {postId: props.data.id, createdBy: user.getUser().id}});
     
      
            if (isLikedFromBeginning.data.data.postLikesList.length != 0){
              
                setLikeClicked(true);
                setAlreadyLiked(true);
                
            }
            if(loading){
            setLoading(false);
            }
        })();

      

     
        }, []);

   
    const likePost = async () => {
        console.log(user.getUser().id, props.data.id)
        
        await axios.post(ip_adress, {query: CREATE_LIKE_MUTATION, variables: {postId: props.data.id, createdBy: user.getUser().id}})

    }
    const unlikePost = async () => {
        await axios.post(ip_adress, {query: DELETE_LIKE_MUTATION, variables: {postId: props.data.id, createdBy: user.getUser().id}})
    }
    const likeOrUnlikePost = async () => {
        
        setLikeClicked(!likeClicked)
        alreadyLiked ? setMinusOneLike(!minusOneLike) : setPlusOneLike(!plusOneLike)
        if (!likeClicked){likePost()}
        else {unlikePost()}

    }

    const addCountToComments = (count) => {

        setPlusCommentCounter(count);
      

    }

   
   
    if (loading){
       return(
       <View style={{width: 200,justifyContent: "flex-end", flex: 1, marginLeft: 30, marginBottom: 10}}>
           <Placeholder
        Animation={Fade}
  
      
      >
        <PlaceholderLine width={30} height={20} />
        <PlaceholderLine height={15}/>
        <PlaceholderLine width={30} />
      </Placeholder>
           </View>
      )
        return (<View style={{position: "absolute", bottom: 35, width: "100%", height: 50, left: 10}}><Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Loading...</Text></View>)
    }
   
        return(

        <View style={{flex: 1, justifyContent: "flex-end", marginLeft: 20, marginBottom: 10}}>
        
             <View style={styles.container}>
                   
   
                
                
                     <View style={styles.leftContainer}>
                        <View style={{flexDirection: "row", width: 60, marginRight: 13}}>
                            <TouchableOpacity onPress={likeOrUnlikePost}>

                         {likeClicked ? <MaterialCommunityIcon name={"thumb-up"} size={30} color={"#ffffff"}></MaterialCommunityIcon> : <MaterialCommunityIcon name={"thumb-up-outline"} size={30} color={"#ffffff"}></MaterialCommunityIcon>}
                            </TouchableOpacity>
                             <Text style={styles.bigText}>{alreadyLiked ? (minusOneLike ? props.likesCount-1 : props.likesCount) : (plusOneLike ? props.likesCount + 1 : props.likesCount)}</Text>
                     
                     
           
                     <TouchableOpacity onPress={() => {navigation.navigate("Comments",  {comments: props.comments, postId: props.data.id, addCountToComments: addCountToComments})}}>
                     <FeatherIcon name={"message-square"} size={30} color={"#ffffff"}></FeatherIcon>

                     </TouchableOpacity >
                     <Text style={styles.bigText}>{plusCommentCounter > 0 ? plusCommentCounter : props.commentsCount}</Text>
                     </View>
                     </View>
                     
                
                 <Text numberOfLines={2} style={styles.content}>{props.data.body}</Text>
                 <Text style={styles.published}>{props.data.dateCreated.slice(0, 10)}</Text>

                 

             </View>
        
            

             </View>

        )

}

export default Footer;