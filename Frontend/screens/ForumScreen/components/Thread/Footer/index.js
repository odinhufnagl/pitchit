import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";




const Footer = (props) => {
  const navigation = useNavigation()



 

      return(

        <View style={styles.container}>
          {/*<View style={{flexDirection: "row", borderRightWidth: 2, borderRightColor: "#bfbfbf", paddingRight: 3, alignItems: "center"}}>
          <FeatherIcon name={"thumbs-up"} size={20}></FeatherIcon>
          <Text style={styles.bigText}>{props.data.likePostForumId.length}</Text>

      </View>*/}
           <TouchableOpacity onPress={() => {navigation.navigate("AnswersForum", {data: props.data})}}>

           <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 0, marginLeft: -5}}>
           <Text style={styles.bigText}>{props.data.commentPostForumId.length}</Text>
            <Text style={styles.smallText}>answers</Text>
           </View>
           
           </TouchableOpacity>
            



        </View>
      )

}

export default Footer;