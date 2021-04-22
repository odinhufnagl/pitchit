import React from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Feed from "../../FeedScreen/components/Feed";
import ProfileInformation from "./components/ProfileInformation";
import FeedOrForum from "../../StartScreen/components/FeedOrForum";
import FeedGrid from "../../../WideUsedComponents/FeedGrid";
import POST_LIST_FILTERED_QUERY from "../../../queries/POST_LIST_FILTERED_QUERY";
import axios from "axios";
import ip_adress from "../../../ip_adress";
import AnimatedLoader from "react-native-animated-loader";
import FeedForum from "../../ForumScreen/components/FeedForum";
import { createRef } from "react";

class FloatingContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {dataPosts: {}, loading: true, feedorforum: "feed"};
        this.refreshing = false;
      
       
        }
    
        changeToFeed = () => {
        
      
            this.setState({feedorforum: "feed"})
   
   
       }
       changeToForum = () => {
           this.setState({feedorforum: "forum"})
   
       }

    



        

    componentDidMount() {
     
        this.setState({loading: false})
    }

   



    render() {
        
        if(this.state.loading){
            return (<AnimatedLoader
              visible={true}
              overlayColor="rgba(255,255,255,0.75)"
              source={require("../../../assets/8675-loader.json")}
              animationStyle={{width: 50, height: 50}}
              speed={1}
            ></AnimatedLoader>)
          }

        return(
            <View style={{}}>

       <View style={{backgroundColor: "#f9f9fb", borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 200}}>
            <ProfileInformation userData={this.props.userData} refresh={this.props.refresh} own={this.props.own}></ProfileInformation>
            <View style={{backgroundColor: "#f9f9fb", flex: 1}}>
           

            
          
            <View style={{marginTop: 50}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 75, marginRight: 75}}>
            <TouchableOpacity  onPress={this.changeToFeed}>
                    <Text style={{fontFamily: "Roboto", fontSize: 25, color: (this.state.feedorforum == "feed") ? "#000000" : "#bebebe",  fontWeight: (this.state.feedorforum == "feed") ? "bold" : null}}>Feed</Text>
        
                    </TouchableOpacity>
                <TouchableOpacity onPress={this.changeToForum}>
            <Text style={{fontFamily: "Roboto", fontSize: 25,color: (this.state.feedorforum == "forum") ? "#000000" : "#bebebe", fontWeight: (this.state.feedorforum == "forum") ? "bold" : null}}>Forum</Text>

            </TouchableOpacity>
                </View>

            
 
             
    
                                    
              {this.state.feedorforum === "forum" ? <View style={{marginTop: 40}}>

                <FeedForum withUpperFilter={false} curUser={this.props.userData.id}></FeedForum>
               </View> :     <View style={{marginTop: 50}}>
           
           <Feed screen={this.props.own ? "own" : "not_own"} query={POST_LIST_FILTERED_QUERY} start={0} end={8} variables={{createdBy: this.props.userData.id}}></Feed>
           </View>
        
    }
            
    </View>
            <View style={{height: 200}}></View>

            </View>

        </View>
            </View>
            
        )
    }
}


export default FloatingContainer;