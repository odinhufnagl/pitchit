import React from "react";
import { FlatList, Image, View, Text, ImageBackground, TextInput } from "react-native";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Picture = (props) => {
        const navigation = useNavigation();
   
    
        return(
           <View style={styles.container}>
               <View style={styles.floatingContainer}>
               <ImageBackground style={styles.image} imageStyle={{ borderRadius: 20}} source={{uri: props.data.source}}>
                   <View style={styles.allContainer}>
                       <TouchableOpacity onPress={() => {navigation.navigate("ProfileScreen", {"not_own": true, user: props.data.createdBy.user})}}>

                       <View style={styles.profileContainer}>
                           <Image style={{width: 30, height: 30, borderRadius: 20, marginRight: 7}}source={{uri: props.data.createdBy.profilepicture}}></Image>
                           <Text style={{fontFamily: "Roboto", color: "#F1E2E2", fontWeight: "bold", fontSize: 13}} numberOfLines={1}>{props.data.createdBy.user.username}</Text>
                       </View>
                       </TouchableOpacity>
                       <View style={styles.contentContainer}>
                           <Text style={{fontFamily: "Roboto", fontSize: 17, color: "#ffffff", opacity: 0.9, fontWeight: "bold"}} numberOfLines={1}>{props.data.body}</Text>
                       </View>
                       <View style={styles.likesAndCommentsContainer}>
                           <FeatherIcon name={"thumbs-up"} size={22} style={{paddingRight: 4, color: "#F8F2F2", opacity: 0.9}}></FeatherIcon>
                           <Text style={{paddingRight: 20, fontFamily: "Roboto", fontSize: 16, color: "#F8F2F2", opacity: 0.9}}>{props.data.likePostId.length}</Text>
                           <FeatherIcon name={"message-square"} size={22} style={{paddingRight: 4, color: "#F8F2F2", opacity: 0.9}}></FeatherIcon>
                           <Text style={{fontFamily: "Roboto", fontSize: 16, color: "#F8F2F2", opacity: 0.9}}>{props.data.commentPostId.length}</Text>
                       </View>
                   </View>
               </ImageBackground>

               </View>
              
        

           </View>
        )     
   
}


export default Picture;
