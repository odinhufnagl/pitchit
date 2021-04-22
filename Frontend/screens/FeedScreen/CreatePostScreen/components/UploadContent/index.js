import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image, Dimensions } from "react-native";
import CREATE_POST_MUTATION from "../../../../../mutations/CREATE_POST_MUTATION";

import * as FileSystem from "expo-file-system";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import VideoPlayer from "expo-video-player";
import FeatherIcon from "react-native-vector-icons/Feather";
import { createRef, useRef, useState } from "react/cjs/react.development";
import axios from "axios";
import { useNavigation, NavigationActions, useRoute } from "@react-navigation/native";
import user from "../../../../../current_user";
import ip_adress from "../../../../../ip_adress";


const UploadContent = () => {
    const navigation = useNavigation();
    const [imageOrVideo, setImageOrVideo] = useState(0);
    var textInputRef = createRef();
    var textInputValue = useRef("");
    const route = useRoute();
    
    
   


    const pickImageOrVideo = async () => {
        
      
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [10, 18],
            quality: 1,
            includeBase64: true,
            
        })

     
        if (!result.cancelled){
            setImageOrVideo(result);
        }
       
   
        
       
 
 
    }
    


    const createPost = async () => {
        FileSystem.copyAsync({from: imageOrVideo.uri, to: FileSystem.documentDirectory + imageOrVideo.uri})
        
        
        const returnedQuery = await axios.post(ip_adress, {query: CREATE_POST_MUTATION, variables: {imageorvideo: imageOrVideo.type, createdBy: user.getUser().id, body: textInputValue.current, source: FileSystem.documentDirectory + imageOrVideo.uri}})
        textInputRef.current.clear();
        route.params.refreshList();
    
        
        navigation.goBack();
    
   

    }
 
    return (
    <View style={{alignItems: "center",flex: 1, }}>
    
     
     
        {imageOrVideo === 0 ? <Image source={require("../../../../../assets/undraw_edit_photo_2m6o.png")} style={{height: 220, width: 250, marginTop: Dimensions.get("window").height / 2 -200}}></Image>: null}
        {typeof imageOrVideo.type != undefined && imageOrVideo.type == "image" ? <Image source={{uri: imageOrVideo.uri}} style={{width: "100%",height: "100%"}}></Image> : null}
        {typeof imageOrVideo.type != undefined && imageOrVideo.type == "video" ? <View style={{marginTop: 0, width: 200, height: 300, alignItems: "center", marginBottom: 900}}>
               <VideoPlayer videoProps={{source: {uri: imageOrVideo.uri},  resizeMode:"cover",
                  shouldPlay: true,           
                  isLooping: true,
                
                  
                  

                  }} width={Dimensions.get("window").width} height={Dimensions.get("window").height-15}></VideoPlayer>
           </View> : null}
     
            {imageOrVideo != 0 ? <TextInput ref={textInputRef} style={styles.textInput} placeholder={"Add a caption"} onChangeText={(value) => {textInputValue.current = value}} multiline={true} textAlignVertical={"top"}></TextInput> : null}
            <TouchableOpacity onPress={pickImageOrVideo} style={{backgroundColor: "white", height: 60, width: "100%",alignItems: "center", justifyContent: "center", position: "absolute", bottom: 50, borderTopColor: "#e8e8e8", borderTopWidth: 1,}}><Text style={{fontFamily: "Roboto", fontWeight: "bold", fontSize: 18}}>Choose image or video</Text></TouchableOpacity>
            <TouchableOpacity  onPress={createPost} style={{backgroundColor: "#5ab9ea", height: 50, width: "100%",alignItems: "center", justifyContent: "center", position: "absolute", bottom: 0}}><Text style={{fontFamily: "Roboto", fontWeight: "bold", fontSize: 18, color: "white"}}>Post</Text></TouchableOpacity>
  
    </View>
    
    
    )





}
export default UploadContent;