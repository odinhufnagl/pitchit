import React from "react";
import { FlatList, TextInput, View, Text, Dimensions } from "react-native";
import Thread from "../Thread";
import dataThreads from "../../../../dummydata/Threads";
import UpperFilter from "../UpperFilter";
import axios from "axios";
import ip_adress from "../../../../ip_adress";
import POST_FORUM_LIST_MOSTLIKED_QUERY from "../../../../queries/POST_FORUM_LIST_LATEST";
import AnimatedLoader from "react-native-animated-loader";
import POST_FORUM_LIST_MOSTANSWERS_QUERY from "../../../../queries/POST_FORUM_LIST_MOSTANSWERS";
import POST_FORUM_LIST_LATEST_QUERY from "../../../../queries/POST_FORUM_LIST_LATEST";
import POST_FORUM_LIST_FILTERED_QUERY from "../../../../queries/POST_FORUM_LIST_FILTERED_QUERY";
import user from "../../../../current_user";
import POST_FORUM_LIST_FOLLOWING_QUERY from "../../../../queries/POST_FORUM_LIST_FOLLOWING_QUERY";


class FeedForum extends React.Component {
       constructor(props){
          
    
           super(props)
           this.state = {forumLatest: [], forumMostAnswers: [], forumFollowing: [], curForumData: [], startLatest: 0, endLatest: 6, startMostAnswers: 0, endMostAnswers: 6, startCurUser: 0, endCurUser: 6, startFollowing: 0, endFollowing: 6, curForum: "latest", refreshing: false, underscored: "latest"};
        this.loading = true;



       }


       fetchDataForumLatest = async () => {
           console.log(this.state.startLatest, this.state.endLatest)
           const queryResult = await axios.post(ip_adress, {query: POST_FORUM_LIST_LATEST_QUERY, variables: {start: this.state.startLatest, end: this.state.endLatest}});
           
           this.setState({refreshing: false, forumLatest: queryResult.data.data.postForumListLatest, startLatest: 0, endLatest: this.state.endLatest + 6, curForumData: queryResult.data.data.postForumListLatest, curForum: "latest"})

       }

       fetchDataForumMostAnswers = async () => {
           const queryResult = await axios.post(ip_adress, {query: POST_FORUM_LIST_MOSTANSWERS_QUERY, variables: {start: this.state.startMostAnswers, end: this.state.endMostAnswers}})
        
           this.setState({refreshing: false,forumMostAnswers: queryResult.data.data.postForumListMostanswers, startMostAnswers: 0, endMostAnswers: this.state.endMostAnswers + 6, curForumData: queryResult.data.data.postForumListMostanswers,  curForum: "mostAnswers"})
       }

       fetchDataForumFollowing = async () => {
        const queryResult = await axios.post(ip_adress, {query: POST_FORUM_LIST_FOLLOWING_QUERY, variables: {curUserId: user.getUser().id, start: this.state.startFollowing, end: this.state.endFollowing}})
        console.log(queryResult.data.data, "hejjjj")
        this.setState({refreshing: false, forumFollowing: queryResult.data.data.postForumListFollowing, startFollowing: 0, endFollowing: this.state.endFollowing + 6, curForumData: queryResult.data.data.postForumListFollowing,  curForum: "following"})
          
       }

       fetchDataForumCurrentUser = async () => {
        const queryResult = await axios.post(ip_adress, {query: POST_FORUM_LIST_FILTERED_QUERY, variables: {start: this.state.startMostAnswers, end: this.state.endMostAnswers, createdBy: this.props.curUser}})
        console.log(queryResult.data.data)
        this.setState({refreshing: false,startCurUser: 0, endCurUser: this.state.endCurUser + 6, curForumData: queryResult.data.data.postForumListFiltered, curForum: "curUser"})
    }

       componentDidMount = async () => {
           if (this.props.withUpperFilter){
           await this.fetchDataForumLatest()
           this.loading = false;
           await this.setState({curForumData: this.state.forumLatest, refreshing: false})
           }
           else if (!this.props.withUpperFilter){
               console.log("hello")
              

               await this.fetchDataForumCurrentUser()
               this.loading = false;
               await this.setState({refreshing: false})
           }
       }

       buttonIsCLicked = async (buttonClicked) => {
          
             
          
             if (buttonClicked === "latest"){
                 this.state.forumLatest.length != 0 ? this.setState({curForumData: this.state.forumLatest, curForum: "latest", refreshing: false}) : this.fetchDataForumLatest();

             }
             else if (buttonClicked === "mostAnswers"){
                 this.state.forumMostAnswers.length != 0 ? this.setState({curForumData: this.state.forumMostAnswers, curForum: "mostAnswers", refreshing: false}) : this.fetchDataForumMostAnswers();
             }
             else if (buttonClicked === "following"){
                this.state.forumFollowing.length != 0 ? this.setState({curForumData: this.state.forumFollowing, curForum: "following", refreshing: false}) : this.fetchDataForumFollowing();

             }


       }

       renderMoreItems = () => {
           if (this.state.curForum === "curUser"){
               this.fetchDataForumCurrentUser()
           }
           if (this.state.curForum === "latest"){
               this.fetchDataForumLatest()
           }
           else if (this.state.curForum === "mostAnswers"){
               this.fetchDataForumMostAnswers()
           }
           else if (this.state.curForum === "following"){
               this.fetchDataForumFollowing()
           }
       }

       refreshList = () => {
           this.setState({refreshing: true})
           
           this.setState({refreshing: true, forumLatest: [], forumMostAnswers: [], curForumData: [], startLatest: 0, endLatest: 6, startMostAnswers: 0, endMostAnswers: 6, curForum: "latest", underscored: "latest"})
           
           this.fetchDataForumLatest()
           this.setState({refreshing: false})
          
           
        }
        
           
        
        
        render(){
           
        if (this.state.refreshing) {
           
            return (<AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../../../../assets/8675-loader.json")}
                animationStyle={{width: 50, height: 50}}
                speed={1}
              ></AnimatedLoader>)

            
        }
        else if (!this.state.refreshing) {
        return(
            <View style={{width: Dimensions.get("window").width}} >
           
            <FlatList
            style={{flex: 1, backgroundColor: "#f9f9fb", borderTopRightRadius: 20}}
            listKey={"feedForum"}
            key={this.state.refreshing}
       
            refreshing={this.state.refreshing}
            onRefresh={this.refreshList}
            ListHeaderComponent={this.props.withUpperFilter ? <UpperFilter buttonIsClicked={this.buttonIsCLicked} setUnderscored={(value) => {this.setState({underscored: value})}} underscored={this.state.underscored}></UpperFilter> : null}
            ListFooterComponent={<View style={{height: 110, backgroundColor: "#f9f9fb"}}></View>}   
            showsVerticalScrollIndicator={false}
            style={{paddingTop: 10}}
            data={this.state.curForumData}
            renderItem = {({item}) => <Thread data={item}></Thread>}
            onEndReached={this.renderMoreItems}
            >
            
            </FlatList>
          

            </View>
        )   
       }  
    } 
}


export default FeedForum;