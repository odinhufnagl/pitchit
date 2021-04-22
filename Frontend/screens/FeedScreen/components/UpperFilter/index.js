import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const UpperFilter = () => {



    return(

         <View style={styles.container}>
             <View style={{borderBottomWidth: 2, borderBottomColor: "#5ab9ea", height: 30}}>
             <Text style={styles.textMarked}>Latest</Text>

             </View>
             <View style={{height: 30}}>
             <Text style={styles.textNotMarked}>Most liked</Text>
             </View>
             <View style={{height: 30}}>
             <Text style={styles.textNotMarked}>Popular</Text>
             </View>

         </View>

    );






};


export default UpperFilter;