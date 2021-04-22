import React from "react";
import { View, Button, Text, TextInput, Dimensions, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import Feed from "./components/Feed";
import {SafeAreaView} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { useNavigation, NavigationActions } from "@react-navigation/native";
import {createRef} from "react";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import CREATE_COMMENT_MUTATION from "../../mutations/CREATE_COMMENT_MUTATION";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import POST_LIST_QUERY from "../../queries/POST_LIST_QUERY";
import { useEffect } from "react";
import AnimatedLoader from "react-native-animated-loader";
import ip_adress from "../../ip_adress";
import POST_LIST_FILTERED_QUERY from "../../queries/POST_LIST_FILTERED_QUERY";
import user from "../../current_user";
import POST_LIST_FOLLOWING_QUERY from "../../queries/POST_LIST_FOLLOWING_QUERY";

import { compose, graphql } from 'react-apollo'
        
        




const FeedScreen = () => { 

    const navigation = useNavigation();
 
    const feedRef = createRef();
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    const [loading, setLoading] = useState(true);
    
    
 
    const refreshList = () => {
   
       setRefreshing(true);
       setLoading(true)
   
  
       setRefreshing(false)
    }

    useEffect(() => {setLoading(false)})
     
    
    
 
            if(loading){
              return (<AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../../assets/8675-loader.json")}
                animationStyle={{width: 50, height: 50}}
                speed={1}
              ></AnimatedLoader>)
            }
  
          
            return (                
             
              <View style={{flex: 1, width: "100%"}}>
                    <TouchableOpacity onPress={() => {refreshList()}} style={{position: "absolute", backgroundColor:"black", width: 35, height: 35, top: 6, left: Dimensions.get("window").width / 2- 15, borderRadius: 40, backgroundColor: "grey", opacity: 0.5, zIndex: 2, alignItems: "center", justifyContent: "center"}}>
                      <EvilIcon name={"refresh"} size={30}></EvilIcon>
                    </TouchableOpacity>
                    <Feed withUpperFilter={false} ref={feedRef} refreshList={refreshList} key={refreshing} screen={"feed"} query={POST_LIST_FOLLOWING_QUERY} variables={{curUserId: user.getUser().id}} start={0} end={8} navigation={navigation}></Feed>
                    <View style={styles.floatingButtonInCorner}>

                    <TouchableOpacity onPress={() => {navigation.navigate("CreatePost", {refreshList: refreshList})}}>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>

                    <FeatherIcon name={"plus"} size={30} color={"white"}></FeatherIcon>


                    </View>
                    </TouchableOpacity>
                   
                  
                   
            
                </View>
                </View>
            

              
     
            )

       
       


}


export default FeedScreen;