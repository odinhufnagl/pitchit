import React, { useRef, useState } from "react";
import { View, TextInput, ImageBackground, FlatList } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import FeedForum from "./components/FeedForum";
import styles from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ForumScreen = () => {
    const navigation = useNavigation();
    const [refresh, setRefresh] = useState(false)
    const [tempState, setTempState] = useState(0);
    const feedRef = useRef();   
  


        return(
            
            <View style={styles.screen}>
              <ImageBackground source={{uri: "https://www.successyeti.com/wp-content/uploads/2020/10/auto-draft-83.jpg"}} style={styles.imageBackground}>

              </ImageBackground>

                {/* <View style={{width: "100%", alignItems: "center", paddingTop: 20, paddingBottom: 20,}}>
                   <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 330}}>
                    <TextInput style={styles.textInput} placeholder={"Search..."}></TextInput>
                    <FeatherIcon name={"search"} size={25}></FeatherIcon>
                    </View>
        </View>*/}
        <FlatList
        style={{flex: 1}}
        onRefresh={() => {setRefresh(true); feedRef.current.refreshList() ;setRefresh(false); setTempState(tempState+1)}}
        refreshing={refresh}
        showsVerticalScrollIndicator={false}
        
        
        ListHeaderComponent={

          
          <View style={{marginTop: 165, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingTop: 20}}>
  
                  <FeedForum withUpperFilter={true} ref={(ref) => {feedRef.current = ref}}></FeedForum>
                  <View style={{height: 300, backgroundColor: "#f9f9fb"}}></View>
          </View>
                 

        }>

        </FlatList>
              
              

              <View style={styles.ButtonInCorner}>
   
              <TouchableOpacity onPress={() => {navigation.navigate("CreateForum")}}>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>

                    <FeatherIcon name={"plus"} size={30} color={"white"}></FeatherIcon>


                    </View>
                    </TouchableOpacity>
         
              </View>


             
                
            </View>
        )
  




}

export default ForumScreen;