import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const UserComponent = (props) => {
 
    const navigation = useNavigation();

   return (
       <TouchableOpacity onPress={() => {navigation.push("ProfileScreen", {"not_own": true, user: props.data.user, key: Math.random().toString()})}}>

       <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, marginLeft: 10}}>
           <Image source={{uri: props.data.profilepicture}} style={{height: 50, width: 50, borderRadius: 50, marginRight: 10}}></Image>
           <Text style={{fontWeight: "bold", fontFamily: "Roboto", fontSize: 19, marginRight: 4}}>{props.data.user.username}</Text>

       </View>
       </TouchableOpacity>
   )



}

export default UserComponent;