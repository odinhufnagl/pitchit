import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View, FlatList } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import { useState } from 'react/cjs/react.development';


import Thread from '../components/Thread';
import Answer from './components/Answer';
import Header from "./components/Header"
import TextInputBottom from './components/TextInputBottom';


const AnswersScreen = () => {
    const route = useRoute();
    return (<AnswersScreen2 route={route}></AnswersScreen2>)
}
class AnswersScreen2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {tempstate: false, refreshing: false}
        this._scrollToBottomY;
    }
    
    
  

   
  render() {
    return (
        <View style={{flex: 1, backgroundColor: "#f9f9fb"}}>
            <Header></Header>
            <View style={{flex: 1, alignItems: "center"}}>

            <FlatList
            showsVerticalScrollIndicator={false}

            
            refreshing={this.state.refreshing}
            onRefresh={() => {this.setState({tempstate: !this.state.tempstate})}}
            key={this.state.tempstate}
    
        
            ListHeaderComponent={<Thread data={this.props.route.params.data}></Thread>}
            renderItem={({item}) => <Answer data={item}></Answer>}
            data={this.props.route.params.data.commentPostForumId}
            keyExtractor={(item, index) => `id_${index}`}  
        
            
            
            >

            </FlatList>
            <TextInputBottom answers={this.props.route.params.data.commentPostForumId} curPostId={this.props.route.params.data.id}></TextInputBottom>
            </View>

        </View>
    )
  }
}

export default AnswersScreen;