import React, { useRef } from "react";
import { Text, View, Image, Touchable, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import USER_QUERY from "../../../../../queries/USER_QUERY";
import axios from "axios";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
    const navigation = useNavigation();
   
  


        
        return(

            <View style={styles.container}>
           


      
    
              <TouchableWithoutFeedback onPress={() => {props.screen == "feed" || props.screen == "start_screen" ? navigation.navigate("ProfileScreen", {"not_own": true, user: props.profile.user}) : null}}>
                  <View style={{flexDirection: "row"}}>

            <Image source={{uri: props.profile.profilepicture}} style={styles.image}></Image>
            <View style={{marginLeft: 10, justifyContent:"center"}}>
            <Text style={styles.username}>{props.profile.user.username}</Text>
            <Text style={styles.fullname}>{props.profile.user.firstName} {props.profile.user.lastName}</Text>

                  </View>
                  
          


            </View>
                  </TouchableWithoutFeedback> 
     
            
           
             
                </View>
              
   
 
        )
  
}





export default Header;