import React, { Profiler } from "react";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import VideoPlayer from "expo-video-player";
import { Video, AVPlaybackStatus } from 'expo-av';
import axios from "axios";
import { createRef } from "react/cjs/react.development";







class Post extends React.PureComponent {

   constructor(props){
      super(props);
   
      this.state = {comments: [], likes: [], loading: true};
      this.footerRef = createRef();
      this.data = this.props.data;


      
   }

   
   componentDidMount() {
  
   
      this.setState({loading: false})
   }

  
   componentWillUnmount() {
      
      if (this.video) {
        this.video.unloadAsync();
      }
   
    }

   
   async play() {
   
      
      const status = await this.video.getStatusAsync();
      if (status.isPlaying) {
         return;
      }
      return this.video.playAsync();
   }

   pause() {
      if (this.video) {
         this.video.pauseAsync();
      }
   }


   render(){
      if (this.state.loading){
         return (<View style={{ width: "100%", height: Dimensions.get("window").height-135,}}><Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Loading...</Text></View>)
     }
     if (this.props.data.imageorvideo == "video"){
        
       
      return(

             <View style={this.props.screen != "feed" ? {height: Dimensions.get("window").height-135, width: "90%", alignItems: "center", alignSelf: "center",} : {height: Dimensions.get("window").height-135, width: "100%", alignItems: "center", alignSelf: "center"}}>
        
      
          
       
          <View style={this.props.screen != "feed" ? {borderRadius: 40, overflow: "hidden", width: "100%", height: "100%", position:"absolute"} : { width: "100%", height: "100%", position:"absolute"}}>

          <VideoPlayer
      
           
           videoProps={{
              videoRef: (ref) => {this.video = ref},
              source: {uri: this.props.data.source},
                
              resizeMode:"cover",
              shouldPlay: false,           
              isLooping: true
              
           
           }}
       
              >
                 
                 
                 </VideoPlayer>  
          </View>

          <View style={{height: "100%", width: "100%"}}>

          <Header profile={this.props.data.createdBy} screen={this.props.screen}></Header>

         <Footer data={this.props.data} likesCount={this.props.data.likePostId.length} commentsCount={this.props.data.commentPostId.length} comments={this.props.data.commentPostId}></Footer>
          </View>
       

        
         </View>
              
         
           
      );
         }
         else {


            return(


               <View style={this.props.screen != "feed" ? {height: Dimensions.get("window").height-135, width: "90%", alignItems: "center", alignSelf: "center",} : {height: Dimensions.get("window").height-135, width: "100%", alignItems: "center", alignSelf: "center"}}>
               <ImageBackground style={{width: "100%", height: "100%"}} source={{uri: this.props.data.source}} imageStyle={this.props.screen != "feed" ? {borderRadius: 40} : null}>
               <Header profile={this.props.data.createdBy} screen={this.props.screen}></Header>
       
               <Footer data={this.props.data} likesCount={this.props.data.likePostId.length} commentsCount={this.props.data.commentPostId.length} comments={this.props.data.commentPostId} screen={this.props.screen}></Footer>
                  
                  
                  </ImageBackground>  
               </View>
            )
         }

 

         }


   }

export default Post;