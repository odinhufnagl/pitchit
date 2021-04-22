import React from "react";
import { View, Text, TextInput } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import styles from "./styles";

const SearchBox = (props) => {

    return(

        <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 330}}>
         <TextInput style={styles.textInput} placeholder={"Search..."} onChangeText={(value) => {props.editSearchTerm(value)}}></TextInput>
         <FeatherIcon name={"search"} size={28}></FeatherIcon>
         </View>
         </View>



    )
}



export default SearchBox;