import React from "react";
import { Image, ImageBackground, View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import styles from "./styles";
import FloatingContainer from "./FloatingContainer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import FeatherIcon from "react-native-vector-icons/Feather";
import IonIcons from "react-native-vector-icons/Ionicons";
import USER_QUERY from "../../queries/USER_QUERY";
import axios from "axios";
import { useNavigation, useRoute} from "@react-navigation/native";
import { retrySymbolicateLogNow } from "react-native/Libraries/LogBox/Data/LogBoxData";
import AnimatedLoader from "react-native-animated-loader";
import ip_adress from "../../ip_adress";
import { refresh_token_key, token_key } from "../../token_key";
import * as SecureStore from "expo-secure-store";
import user from "../../current_user";
import Users from "../SearchScreen/components/Users";



const ProfileScreen = (props) => {
    const route = useRoute();
    const navigation = useNavigation();
    var own = false;

   
    
    var userData = user.getUser()
    
    route.params === undefined ? own = true : own = false; //kan vara för riskigt stamenent, med tanke på undefined som det kan bli ändå
    route.params === undefined ? userData = userData : userData = route.params.user;
    userData.id == user.getUser().id ? own = true : own = false

    return (<ProfileScreen2 own={own} navigation={navigation} userData={userData} logout={() => {props.logout()}}></ProfileScreen2>)
 
}

class ProfileScreen2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {userData: this.props.userData, refreshState: false, refreshing: false, loading: true};
     
        
    }

    componentDidMount() {
        console.log(user.getUser().profile.profilepicture)

      
     
        this.setState({loading: false})
        
      
        
    }

    
    refetch_data = async () => {
        this.setState({loading: true})
        if (this.props.own){
        const queryResult1 = await axios.post(ip_adress, {query: USER_QUERY, variables: {username: user.getUser().username}})
            user.setUser(queryResult1.data.data.user)
            this.setState({refreshState: !this.state.refreshState, refreshing: false, loading: false, userData: user.getUser()});

        }
        
   
       
        this.setState({refreshState: !this.state.refreshState, refreshing: false, loading: false});
        
    }

    logUserOut = async () => {
        await SecureStore.setItemAsync(token_key, "")
        await SecureStore.setItemAsync(refresh_token_key, "")
        this.props.logout()


    }

   
     render() {
      

        return(
            <View style={{backgroundColor: "black"}}>

                    <ImageBackground style={styles.imageBackground} source={{uri: this.state.userData.profile.profilepicture}} >
                    
                    </ImageBackground>
            <FlatList 
            showsVerticalScrollIndicator={false}
            onRefresh={() => {this.setState({refreshing: true}); this.refetch_data()}}
            refreshing={this.state.refreshing}
            ListHeaderComponent={


            <View style={styles.screen} key={this.state.refreshState}>
               
                     
                 
                    {this.props.own ? <View style={styles.headerContainer_own}>
                         <Text style={styles.header}>Profile</Text>
                         <MaterialIcons name={"logout"} size={28} color={"#ffffff"} style={{alignSelf: "center", paddingTop: 5}} onPress={() => {this.logUserOut()}}></MaterialIcons>
                        

                     </View> : <View style={styles.headerContainer_not_own}>

                         <TouchableOpacity onPress={this.props.navigation.goBack} style={styles.headerButton}>

                         <FeatherIcon name={"arrow-left"} size={28} color={"white"} style={{marginRight: 20, marginTop: 4}}></FeatherIcon>
                         </TouchableOpacity>
                         <Text style={styles.header}>Profile</Text>

                     </View>

                           }

                   
                    
                    <FloatingContainer userData={this.state.userData} refresh={this.refetch_data} own={this.props.own}></FloatingContainer>
               



            </View>
            }
            >





            </FlatList>
            </View>



        )
     }
}


export default ProfileScreen;