import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { baseProps } from "react-native-gesture-handler/dist/src/handlers/gestureHandlers";
import styles from "./styles";
import CREATE_FOLLOWING_MUTATION from "../../../../../../mutations/CREATE_FOLLOWING_MUTATION";
import axios from "axios";
import { useSafeArea } from "react-native-safe-area-context";
import FOLLOWINGS_LIST_QUERY from "../../../../../../queries/FOLLOWINGS_LIST_QUERY";
import DELETE_FOLLOWING_MUTATION from "../../../../../../mutations/DELETE_FOLLOWING_MUTATION";
import { useState } from "react";
import { useEffect } from "react";
import user from "../../../../../../current_user";
import ip_adress from "../../../../../../ip_adress";
const Header = (props) => {
    
    const [isFollowing, setIsFollowing] = useState(false);
    


    useEffect(() => {

        (async () => {
        const queryResult = await axios.post(ip_adress, {query: FOLLOWINGS_LIST_QUERY, variables: {createdBy: user.getUser().id, user: props.userData.id}})
        if (queryResult.data.data.followingsList.length != 0){
            setIsFollowing(true);
        }

    })()


    }, [])

   

    const FollowOrUnfollowUser = async () => {


        if (isFollowing){
            const queryResult = await axios.post(ip_adress, {query: DELETE_FOLLOWING_MUTATION, variables: {createdBy: user.getUser().id, user: props.userData.id}})
            setIsFollowing(false);
        }
        else {
        const queryResult = await axios.post(ip_adress, {query: CREATE_FOLLOWING_MUTATION, variables: {createdBy: user.getUser().id, user: props.userData.id}})
        setIsFollowing(true);
        }

    }


    



return(
    <View>
    <View style={styles.left}>
                      
            <Image source={{uri: props.userData.profile.profilepicture}} style={styles.image}></Image>
            <View style={{marginLeft: 10}}>
            <Text style={styles.username}>@{props.userData.username}</Text>
            <Text style={styles.fullname}>{props.userData.firstName} {props.userData.lastName}</Text>
    


            </View>
            
     
            </View>
            <View style={styles.bioContainer}>
            <Text style={styles.bio}>{props.userData.profile.bio}</Text>
            </View>
           {!props.own ? <TouchableOpacity style={isFollowing ? styles.buttonFollowing : styles.buttonFollow} onPress={() => {FollowOrUnfollowUser()}}>
                <Text style={{fontFamily: "Roboto", fontSize: 14}}>{isFollowing ? "Following" : "Follow"}</Text>

            </TouchableOpacity> : null}
            </View>
)
     

}

export default Header;