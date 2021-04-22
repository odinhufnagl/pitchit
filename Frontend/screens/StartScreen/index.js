import React from "react";
import { FlatList, ScrollView, View, Text } from "react-native";
import styles from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import ListTopPictures from "./components/ListTopPictures";
import CreatorsList from "./components/CreatorsList";
import FeedOrForum from "./components/FeedOrForum";
import Feed from "../FeedScreen/components/Feed";
import POST_LIST_QUERY from "../../queries/POST_LIST_QUERY";

import axios from "axios";
import USER_LIST_QUERY from "../../queries/USER_LIST_QUERY";
import AnimatedLoader from "react-native-animated-loader";
import ip_adress from "../../ip_adress";
import user from "../../current_user";
import POST_LIST_FILTERED_QUERY from "../../queries/POST_LIST_FILTERED_QUERY";

class StartScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {refreshing: false, loading: true, listTopPicturesData: [], feedData: []}
 

    }

    fetchData = async () => {
        const queryResult1 = await axios.post(ip_adress, {query: POST_LIST_FILTERED_QUERY, variables: {curUserId: user.getUser().id, start: 0, end: 3}})
        this.setState({listTopPicturesData: queryResult1.data.data.postListFiltered, loading: false})
        
    }

    componentDidMount() {
        this.fetchData()


    }

    refetch_data = () => {
            this.setState({loading: true})
            this.fetchData();
           
            this.setState({refreshState: !this.state.refreshState, refreshing: false});
        
    

    
    }


   


    render() {

        
        if(this.state.loading){
            return (<AnimatedLoader
              visible={true}
              overlayColor="rgba(255,255,255,0.75)"
              source={require("../../assets/8675-loader.json")}
              animationStyle={{width: 50, height: 50}}
              speed={1}
            ></AnimatedLoader>)
          }
        return (
            <FlatList
            
    showsVerticalScrollIndicator={false}
    onRefresh={() => {this.setState({refreshing: true}); this.refetch_data()}}
    refreshing={this.state.refreshing}
    ListHeaderComponent={

            <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Explore</Text>
            </View>
                       
            <FlatList
            listKey={"entireScreenFlatList"}
            showsVerticalScrollIndicator={false}
        
            renderItem ={() => <View style={{backgroundColor: "white"}}></View>}
            ListHeaderComponent={  <View>
            <ListTopPictures data={this.state.listTopPicturesData}></ListTopPictures>
                    
            <CreatorsList></CreatorsList>
                   
            <Text style={{fontWeight: "bold", fontSize: 28, fontFamily: "Roboto", marginLeft: 30, marginBottom: 20, marginTop: 40}}>Feed</Text>
            <Feed key={this.state.refreshing} screen={"start_screen"} query={POST_LIST_FILTERED_QUERY} start={3} end={8} variables={{curUserId: user.getUser().id}}></Feed>
            
                    
            </View>
                   }
            >
            </FlatList>
                    
            </View>
    }
            
            ></FlatList>


        )
    }


}

export default StartScreen;