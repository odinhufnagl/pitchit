import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { useNavigation, useRoute } from "@react-navigation/native";
import UploadContent from "./components/UploadContent";
import Header from "./components/Header";




const CreatePostScreen = () => {
 
        return (
            <View style={{backgroundColor: "white", flex: 1}}>
                
                <Header></Header>
                <UploadContent></UploadContent>
                

            </View>







        )
        }

export default CreatePostScreen;