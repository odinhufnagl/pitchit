import React from "react";

import { SafeAreaView, View, FlatList, Image, ImageBackground, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "expo-video-player";
import { useState } from "react/cjs/react.development";
const FeedGridPost = (props) => {

  const [playing, setPlaying] = useState(false);
 
  var video = {};

  const play = async () => {
   
      
    const status = await video.getStatusAsync();
   
    if (status.isPlaying) {
       return;
    }
    video.playAsync();
    setPlaying(true);
 }

 const pause = async () => {
    if (video) {
      video.pauseAsync();
      setPlaying(false);
    }
 }

  
  
   if (props.data.imageorvideo === "image"){
    return(
        
         
             <ImageBackground style={styles.imageThumbnail} source={{ uri: props.data.source }} imageStyle={{borderRadius: 8}}>
    
               
               <View style={{position: "absolute", bottom: 5, left: 7, flexDirection: "row"}}>
               <FeatherIcon name={"thumbs-up"} size={27} color={"#ffffff"}></FeatherIcon>
               <Text style={styles.textAmountOfLikes}>{props.data.likePostId.length}</Text>
               
               </View>
             </ImageBackground>

        
          

    );
    
   }
   else {
     return(  
       <View style={{borderRadius: 8, overflow: "hidden", flex: 1}}>

         <VideoPlayer
         
         videoProps={{
          videoRef: (ref) => {video = ref},
          source: {uri: props.data.source},
            
          resizeMode:"cover",
       
          isLooping: true
          
       
       }}
       inFullscreen={false}
       height={270}
       width={170}
         
         >
  
         </VideoPlayer>
         <View style={{position: "absolute", left: 7, top: 7}}>

        {playing === false ? <TouchableOpacity onPress={play}><FeatherIcon name={"play"} style={{alignSelf: "center"}} size={30} color={"white"} style={{opacity: 0.9, }}></FeatherIcon></TouchableOpacity>
        :
        <TouchableOpacity onPress={pause}><FeatherIcon name={"pause"} style={{alignSelf: "center"}} size={30} color={"white"} style={{opacity: 0.9, }}></FeatherIcon></TouchableOpacity>}
         </View>
                 
        <View style={{position: "absolute", bottom: 5, left: 7, flexDirection: "row"}}>
        
        <FeatherIcon name={"thumbs-up"} size={27} color={"#ffffff"}></FeatherIcon>
        <Text style={styles.textAmountOfLikes}>{props.data.likePostId.length}</Text>
        
        </View>
      
       </View>
      

     
    
     )
}
}
export default FeedGridPost;


