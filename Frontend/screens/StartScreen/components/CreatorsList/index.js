import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import CreatorsView from "./CreatorsView";

import USER_LIST_QUERY from "../../../../queries/USER_LIST_QUERY";
import axios from "axios";

import ip_adress from "../../../../ip_adress";
import user from "../../../../current_user";
import * as Location from "expo-location";

import USER_QUERY from "../../../../queries/USER_QUERY";
import UPDATE_LOCATION_MUTATION from "../../../../mutations/UPDATE_LOCATION_MUTATION";
import USER_LIST_BY_LOCATION_QUERY from "../../../../queries/USER_LIST_BY_LOCATION_QUERY";
class CreatorsList extends React.Component {
          constructor(props){
               super(props)
               this.state = {data: [], start: 0, end: 8, location: {}}
          }

          fetchData = async (start, end) => {
    
     
               const queryResult2 = await axios.post(ip_adress, {query: USER_LIST_BY_LOCATION_QUERY, variables: {curUserId: user.getUser().id, start: start, end: end, curLongitude: this.state.location.coords.longitude, curLatitude: this.state.location.coords.latitude}})
               console.log(queryResult2.data.data)
               this.setState({data: this.state.data.concat(queryResult2.data.data.userListByLocation), start: this.state.start+8, end: this.state.end+8})
     
     
     
          }

          renderMoreItems = () => {
             
            
               console.log("end reached")
               this.fetchData(this.state.start, this.state.end)
               }

          getLocation = async () => {
               let { status } = await Location.requestPermissionsAsync();
               if (status !== 'granted') {
                 setErrorMsg('Permission to access location was denied');
                 return;
               }
         
               let location = await Location.getCurrentPositionAsync({});
               this.setState({location: location})
              
               
               
               
               
          }
          
          updateUserLocation = async () => {
            
               if (Math.abs(this.state.location.coords.longitude - user.getUser().profile.locationLongitude) > 2 ||
               Math.abs(this.state.location.coords.latitude - user.getUser().profile.locationLatitude) > 2){
                    const queryResult = await axios.post(ip_adress, {query: UPDATE_LOCATION_MUTATION, variables: {id: user.getUser().id, locationLatitude: this.state.location.coords.latitude, locationLongitude: this.state.location.coords.longitude}})
                    const queryResult1 = await axios.post(ip_adress, {query: USER_QUERY, variables: {username: user.getUser().username}})
                    user.setUser(queryResult1.data.data.user)
               }
          }
          

          componentDidMount = async () => {
              await this.getLocation()
              await this.updateUserLocation()
              
             
              await this.fetchData(this.state.start, this.state.end)

          }

         
          render() {
           return(
                <View>
                     <View style={styles.headerContainer}>
                     <Text style={styles.header}>Creators near you</Text>
                    
               

                     </View>
                  
                     <FlatList
                     listKey={"creatorsView"}
                     style={{paddingLeft: 20}}
                     showsHorizontalScrollIndicator={false}
                     horizontal={true}
                     data = {this.state.data}
                     renderItem={({item}) => <CreatorsView data={item}></CreatorsView>}
                     ListFooterComponent={<View style={{width: 50, height: 20}}></View>}
                     onEndReached={() => {this.renderMoreItems()}}
                     onEndReachedThreshold={5}

                     ></FlatList>

                </View>       
           )
          }
    
}
export default CreatorsList;