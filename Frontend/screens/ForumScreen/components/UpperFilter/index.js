import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.development";
import styles from "./styles";

const UpperFilter = (props) => {
   



    return(

        <View style={{width: "100%", backgroundColor: "#f9f9fb", height: 100, paddingTop: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>



         <View style={styles.container}>

             <TouchableOpacity onPress={() => {props.setUnderscored("latest"); props.buttonIsClicked("latest")}}>

             <View style={props.underscored == "latest" ? {borderBottomWidth: 2, borderBottomColor: "#5ab9ea", height: 30} : {height: 30}}>
             <Text style={props.underscored === "latest" ? styles.textMarked : styles.textNotMarked}>Latest</Text>

             </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => {props.setUnderscored("following"); props.buttonIsClicked("following")}}>

<View style={props.underscored === "following" ?  {borderBottomWidth: 2, borderBottomColor: "#5ab9ea", height: 30} : {height: 30}}>
<Text style={props.underscored === "following" ? styles.textMarked : styles.textNotMarked}>Following</Text>
</View>

</TouchableOpacity>
             <TouchableOpacity onPress={() => {props.setUnderscored("mostAnswers"); props.buttonIsClicked("mostAnswers")}}>

             <View style={props.underscored === "mostAnswers" ?  {borderBottomWidth: 2, borderBottomColor: "#5ab9ea", height: 30} : {height: 30}}>
             <Text style={props.underscored === "mostAnswers" ? styles.textMarked : styles.textNotMarked}>Most answers</Text>
             </View>
            
             </TouchableOpacity>


         </View>
        </View>

    );






};


export default UpperFilter;