import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import SearchBox from "./components/SearchBox";
import styles from "./styles";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Dimensions} from "react-native";
import Picture from "../StartScreen/components/ListTopPictures/Picture";
import Users from "./components/Users";
import USER_LIST_QUERY from "../../queries/USER_LIST_QUERY";
import ip_adress from "../../ip_adress";
import axios from "axios";

import AnimatedLoader from "react-native-animated-loader";

class SearchScreen extends React.Component{


     constructor(props){
         super(props)
         this.state = {refreshing: false, loading: true, rerender: 0};
        
     }

   
     
     componentDidMount() {
         this.setState({loading: false})
      
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


        return(


            <FlatList
            key={this.state.rerender}
            
            onRefresh={() => {this.setState({rerender: this.state.rerender + 1})}}
            refreshing={this.state.refreshing}
            style={styles.screen}
            showsVerticalScrollIndicator={false}
            
            ListHeaderComponent={

            <View style={styles.screen}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Search</Text>
                </View>
               
           
                 <Users data={this.state.data}></Users>
            </View>



            }>



            </FlatList>

           
        )
     }

}


export default SearchScreen;