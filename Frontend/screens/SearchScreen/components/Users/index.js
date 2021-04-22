import React from "react";
import { View, FlatList } from "react-native";
import SearchBox from "../SearchBox";
import axios from "axios"

import UserItem from "./UserItem";
import ip_adress from "../../../../ip_adress";
import USER_LIST_QUERY from "../../../../queries/USER_LIST_QUERY";
import user from "../../../../current_user";
class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {data: [], start: 0, end: 10, search_word: ""};
    

    }
    
    fetchData = async (search_word, endReached) => {
        this.start = this.state.start
        this.end = this.state.end
        console.log(endReached)
        if (!endReached){
            console.log("hello")
            this.start = 0
            this.end = 10
        }
        if (search_word == ""){ 
               const queryResult = await axios.post(ip_adress, {query: USER_LIST_QUERY, variables: {searchWord: search_word, start: this.start, end: this.end, curUserId: user.getUser().id}})
               if (!endReached){
               this.setState({data: queryResult.data.data.userList, loading: false, refreshing: false, start: this.start+10, end: this.end+10, search_word: search_word})
               }
               else {
                this.setState({data: queryResult.data.data.userList, loading: false, refreshing: false, start: this.start + 10, end: this.end + 10})
               }
            }
        else {
            
            
            
        const queryResult = await axios.post(ip_adress, {query: USER_LIST_QUERY, variables: {searchWord: search_word, curUserId: user.getUser().id, start: this.start, end: this.end}})
        console.log(queryResult.data.data)
        if (!endReached){
        this.setState({data: queryResult.data.data.userList, loading: false, refreshing: false, start: this.start+10, end: this.end +10, search_word: search_word})
        }
        else {
            this.setState({data: queryResult.data.data.userList, loading: false, refreshing: false, start: this.start + 10, end: this.end + 10})
        }
        }
      
        
     }

    editSearchTerm = (value) => {
      
        
        this.fetchData(value,false)
       
    }

    renderMoreItems = () => {
        console.log("end reachted")

        this.fetchData(this.state.search_word,  true)



    }

    componentDidMount() {
      
        this.fetchData("",false)
        
    }

   

      



    render() {
        return(
            <View>

                <SearchBox editSearchTerm={this.editSearchTerm}></SearchBox>
                <FlatList
                style={{marginTop: 15}}
                data={this.state.data}
                onEndReached={() => {this.renderMoreItems()}}
                onEndReachedThreshold={2}
             
            
                renderItem={({item}) => <UserItem data={item}></UserItem>}
                
                >
                </FlatList>
                
            </View>


        
        )
    }


}

export default Users;