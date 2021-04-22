import React from "react";
import { Text, View, Image } from "react-native";
import axios from "axios";

import USER_QUERY from "../../../../../queries/USER_QUERY";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
const Comment = (props) => {
  


    

   return (
       <View style={{flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 10}}>
           <Image source={{uri: props.data.createdBy.profilepicture}} style={{height: 30, width: 30, borderRadius: 20, marginRight: 10}}></Image>
           <Text style={{fontWeight: "bold", fontFamily: "Roboto", fontSize: 17, marginRight: 4}}>{props.data.createdBy.user.username}:</Text>
           <Text style={{fontFamily: "Roboto", fontSize: 16, marginRight: 4}}>{props.data.content}</Text>
       </View>
   )



}

export default Comment;