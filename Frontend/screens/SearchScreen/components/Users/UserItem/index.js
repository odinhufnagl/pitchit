import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const UserItem = (props) => {
    const navigation = useNavigation();
    console.log(props.data.profile, props.data)
    return(
        <TouchableOpacity onPress={() => {navigation.navigate("ProfileScreen", {"not_own": true, user: props.data})}}>
        <View style={styles.container}>
        
 

       
        <View style={styles.left}>
            
        <Image source={{uri: props.data.profile.profilepicture}} style={styles.image}></Image>
        <View style={{marginLeft: 10, alignSelf: "center"}}>
        <Text style={styles.username}>@{props.data.username}</Text>
        <Text style={styles.fullname}>{props.data.firstName} {props.data.lastName}</Text>



        </View>
 
        </View>
       
       
        </View>
            </TouchableOpacity> 
        
    )

}


export default UserItem;