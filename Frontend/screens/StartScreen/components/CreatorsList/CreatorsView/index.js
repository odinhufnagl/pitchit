import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CreatorsView = (props) => {
    const navigation = useNavigation();



    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("ProfileScreen", {"not_own": true, user: props.data})}}>

            <Image style={styles.image} source={{uri: props.data.profile.profilepicture}}></Image>
            <Text style={styles.textName}>{props.data.firstName} {props.data.lastName}</Text>
            <Text style={styles.textUserName}>@{props.data.username}</Text>
                          

            </TouchableOpacity>
         

         
        </View>



    );

}


export default CreatorsView;