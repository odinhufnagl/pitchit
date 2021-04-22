import React from 'react'
import { View, FlatList } from 'react-native';
import UserComponent from './UserComponent';

const ListOfUsers = (props) => {
    console.log(props.usersList, "hhihuh")
    
    return (
       <View style={{flex: 1, marginTop: 20}}>
            <FlatList
            
            data={props.usersList}
            renderItem={({item}) => 
            <UserComponent data={item}></UserComponent>
            }
            >
                  


            </FlatList>
            
       </View>
    )
}

export default ListOfUsers;