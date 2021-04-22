import React from "react";
import { View, Text, Alert, Modal, FlatList } from "react-native";
import styles from "./styles";
import axios from "axios";
import { useEffect, useRef } from "react";
import FOLLOWINGS_LIST_QUERY from "../../../../../../queries/FOLLOWINGS_LIST_QUERY";
import FOLLOWERS_LIST_QUERY from "../../../../../../queries/FOLLOWERS_LIST_QUERY";
import POST_LIKES_LIST_QUERY from "../../../../../../queries/POST_LIKES_LIST_QUERY";
import { createRef, useState } from "react/cjs/react.development";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import UPDATE_PROFILEPICTURE_MUTATION from "../../../../../../mutations/UPDATE_PROFILEPICTURE_MUTATION";
import Dialog from "react-native-dialog";
import UPDATE_BIO_MUTATION from "../../../../../../mutations/UPDATE_BIO_MUTATION";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia,Progressive } from "rn-placeholder";
import * as FileSystem from "expo-file-system";
import ip_adress from "../../../../../../ip_adress";
import { useNavigation } from "@react-navigation/native";


const Footer = (props) => {
    const [following, setFollowing] = useState(null);
    const [followers, setFollowers] = useState(null);
    const [likes, setLikes] = useState(null);
    const [temp, setTemp] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    var image = null;
    const navigation = useNavigation();  
    var bioInputValue = useRef();

    


    const fetchData = async () => {

    
        
        
        const queryResult = await axios.post(ip_adress, {query: FOLLOWINGS_LIST_QUERY, variables: {createdBy: props.userData.id}})
        
        setFollowing(queryResult.data.data.followingsList)
    
      
        const queryResult2 = await axios.post(ip_adress, {query: FOLLOWERS_LIST_QUERY, variables: {user: props.userData.id}})
        setFollowers(queryResult2.data.data.followingsList)
       
        const queryResult3 = await axios.post(ip_adress, {query: POST_LIKES_LIST_QUERY, variables: {userLiked: props.userData.id}})
        setLikes(queryResult3.data.data.postLikesList)
        setTemp(temp + 1);
        setLoading(false);
     
    }

    const updateImage = async () => {
        FileSystem.copyAsync({from: image.uri, to: FileSystem.documentDirectory + image.uri})
        
        const returnedQuery = await axios.post(ip_adress, {query: UPDATE_PROFILEPICTURE_MUTATION, variables: {id: props.userData.id, profilepicture: FileSystem.documentDirectory + image.uri}})

        props.refresh();
        



    }

 
    
    const pickImage = async () => {
        

      
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

    
        if (!result.cancelled){
            image = result;
           
            updateImage();
        }
        
        
    }

    const updateBio = async () => {
        const returnedQuery = await axios.post(ip_adress, {query: UPDATE_BIO_MUTATION, variables: {id: props.userData.id, bio: bioInputValue.current}})
    
        setModalVisible(false);
        props.refresh();
        

    }
    
    useEffect(() => {setLoading(true);fetchData()}, []);


  
            if (loading){
                return(
                    <View style={{width: 200, alignSelf: "center", marginTop: 30}}>
                        <Placeholder
                     Animation={Fade}
               
                   
                   >
                     <PlaceholderLine width={100} height={40} style={{marginBottom: 20}} noMargin/>
                 
                   </Placeholder>
                   {props.own ? 
                      
                      <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 40}}>
   
                      <TouchableOpacity onPress={() => {pickImage()}}style={{height: 30, width: 120, borderColor: "#d6d6d6", borderRadius: 5, borderWidth: 2, alignItems: "center", justifyContent: "center", marginRight: 5}}><Text style={{fontWeight: "bold", fontSize: 16}}>Change image</Text></TouchableOpacity>
                          <TouchableOpacity onPress={() => {setModalVisible(true)}}style={{height: 30, width: 120, borderColor: "#d6d6d6", borderRadius: 5, borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5}}><Text style={{fontWeight: "bold", fontSize: 16}}>Edit bio</Text></TouchableOpacity>
                         </View> : null}
                        </View>
                   )
            }

            return(
               <View key={loading}>
                   {props.own ? 
                   <Dialog.Container visible={modalVisible}>
                       <Dialog.Input style={{height: 200, borderWidth: 2, borderRadius: 5, borderColor: "#cfcfcf", fontSize: 16, fontWeight: "bold"}} multiline={true} defaultValue={props.userData.profile.bio} onChangeText={(value) => {bioInputValue.current = value}}></Dialog.Input>
                       <Dialog.Button label="Cancel" onPress={() => {setModalVisible(false)}}></Dialog.Button>
                       <Dialog.Button label="Change" onPress={() => {updateBio()}}></Dialog.Button>

                   </Dialog.Container> : null}
                 

                   <View style={styles.container}>
                       <TouchableOpacity onPress={() => {navigation.push("Userslist", {headerTitle: "Followers", usersList: followers.map(obj => obj.createdBy)})}}>


                       <View style={styles.leftContainer}>
                           <Text style={styles.bigText}>{followers === null ? 0 : followers.length}</Text>
                           <Text style={styles.smallText}>Followers</Text>
                       </View>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={() => {navigation.push("Userslist", {headerTitle: "Following", usersList: following.map(obj => obj.user)})}}>

                       <View style={styles.middleContainer}>
                        

                       <Text style={styles.bigText}>{following === null ? 0 : following.length}</Text>
                           <Text style={styles.smallText}>Following</Text>
                      
                       </View>
                       </TouchableOpacity>
                       <View style={styles.rightContainer}>
                    
                           <Text style={styles.bigText}>{likes === null ? 0 : likes.length}</Text>
                           <Text style={styles.smallText}>Likes</Text>
                          
                       </View>
                   </View>
                       {props.own ? 
                      
                   <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 40}}>

                   <TouchableOpacity onPress={() => {pickImage()}}style={{height: 30, width: 120, borderColor: "#d6d6d6", borderRadius: 5, borderWidth: 2, alignItems: "center", justifyContent: "center", marginRight: 5}}><Text style={{fontWeight: "bold", fontSize: 16}}>Change image</Text></TouchableOpacity>
                       <TouchableOpacity onPress={() => {setModalVisible(true)}}style={{height: 30, width: 120, borderColor: "#d6d6d6", borderRadius: 5, borderWidth: 2, alignItems: "center", justifyContent: "center", marginLeft: 5}}><Text style={{fontWeight: "bold", fontSize: 16}}>Edit bio</Text></TouchableOpacity>
                      </View> : null}
                 
               </View>
            )
                

}

export default Footer;