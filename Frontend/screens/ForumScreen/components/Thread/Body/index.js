
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";


const Body = (props) => {
     const navigation = useNavigation();


      return(





             <View style={styles.container}>
                 <TouchableOpacity onPress={() => {navigation.navigate("AnswersForum", {data: props.data})}}>

                 <Text style={styles.header}>{props.data.title}</Text>
                        
                 <Text style={styles.content}>{props.data.body}</Text>
                 <Text style={styles.published}>{props.data.dateCreated.slice(0, 10)}</Text>
                 </TouchableOpacity>
             </View>

      )








}



 
export default Body;