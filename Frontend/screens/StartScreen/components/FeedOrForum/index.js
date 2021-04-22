import React from "react";
import { View, Text, Picker } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Feed from "../../../FeedScreen/components/Feed";
import FeedForum from "../../../ForumScreen/components/FeedForum";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import FeedGrid from "../../../../WideUsedComponents/FeedGrid";
import styles from "./styles";





class FeedOrForum extends React.Component{
    constructor(props){
        super(props)
        this.state = {feedorforum: "feed"}
       
    }


    changeToFeed = () => {
        
      
         this.setState({feedorforum: "feed"})


    }
    changeToForum = () => {
        this.setState({feedorforum: "forum"})

    }
   
    render() {

        


        return (
            <View style={{marginTop: 50}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginLeft: 75, marginRight: 75}}>
            <TouchableOpacity style={styles.feedOrForumButtons} onPress={this.changeToFeed}>
                    <Text style={{fontFamily: "Roboto", fontSize: 25, color: (this.state.feedorforum == "feed") ? "#000000" : "#bebebe",  fontWeight: (this.state.feedorforum == "feed") ? "bold" : null}}>Feed</Text>
        
                    </TouchableOpacity>
                <TouchableOpacity style={styles.feedOrForumButtons} onPress={this.changeToForum}>
            <Text style={{fontFamily: "Roboto", fontSize: 25,color: (this.state.feedorforum == "forum") ? "#000000" : "#bebebe", fontWeight: (this.state.feedorforum == "forum") ? "bold" : null}}>Forum</Text>

            </TouchableOpacity>
                </View>

            
 
             
        <View style={{marginTop: 32, opacity: (this.state.feedorforum == "feed") ? 1 : 0}}>
           
            <Feed></Feed>
        </View>
                                    
               <View style={{marginTop: 63, position: "absolute", opacity: (this.state.feedorforum == "forum") ? 1 : 0}}>

                <FeedForum withUpperFilter={false}></FeedForum>
               </View>
        
                </View>
                
        );
      
    }
}



export default FeedOrForum;