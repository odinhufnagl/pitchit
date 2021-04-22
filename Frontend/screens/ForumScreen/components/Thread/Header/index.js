import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const Header = (props) => {
      const navigation = useNavigation()

      return(

        <View style={styles.container}>
        
 

       
                  <TouchableOpacity  onPress={() => {navigation.navigate("ProfileScreen", {"not_own": true, user: props.data.createdBy.user})}}>
            <View style={styles.left}>
            <Image source={{uri: props.data.createdBy.profilepicture}} style={styles.image}></Image>
            <View style={{marginLeft: 10}}>
            <Text style={styles.username}>@{props.data.createdBy.user.username}</Text>
            <Text style={styles.fullname}>{props.data.createdBy.user.firstName} {props.data.createdBy.user.lastName}</Text>
    


            </View>

                      
            
            </View>
                  </TouchableOpacity>
            {/*<FeatherIcon name={"user-plus"} size={20} style={{marginRight: 20}}></FeatherIcon>*/}
     
           
         
        
            
          
    
    
            </View>
      )







}

export default Header;