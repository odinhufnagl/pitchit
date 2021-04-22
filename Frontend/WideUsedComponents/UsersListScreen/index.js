import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native';
import Header from "./Header";
import ListOfUsers from './ListOfUsers';


const UsersListScreen = () => {
    const route = useRoute();
    console.log(route.params.usersList, "helop")
    
    
    
    
    return (
       <View style={{flex: 1}}>
    

           <Header headerTitle={route.params.headerTitle}></Header>
           <ListOfUsers usersList={route.params.usersList}></ListOfUsers>
       </View>
    )
}


export default UsersListScreen;
