import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Answer = (props) => {
    
   
    return (
        <View style={{width: 300,backgroundColor: "white", alignSelf: "center", marginTop: 20, borderRadius: 20}}>
            

            <Text style={{fontFamily: "Roboto", fontWeight: "bold", fontSize: 15, marginTop: 10, marginLeft: 10}}>@{props.data.createdBy.user.username}</Text>

            <Text style={{fontFamily: "Roboto",fontSize: 17,marginLeft: 10, marginTop: 5, marginBottom: 20}}>{props.data.content}</Text>
          
        </View>
 
    )
}

export default Answer;