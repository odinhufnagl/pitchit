import React from "react";
import { FlatList, Text, View } from "react-native";
import Picture from "./Picture";
import dataPosts from "../../../../dummydata/Posts";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Dimensions} from "react-native";
import styles from "./styles";
import axios from "axios";
import POST_LIST_QUERY from "../../../../queries/POST_LIST_QUERY";
class ListTopPictures extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {activeSlide: 0}
    }


    _renderItem = ({item, index}) => {
        
            return (
                <View style={{alignItems: "center",}}>
                    <Picture data={item}></Picture>
            
                    
                </View>
            );
        }

    
     render() {


        return(

                <View>
                <View style={{alignItems: "center"}}>
                <Carousel
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                autoplay={true}
                autoplayInterval={5500}
                
              loop={true}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              layout={"default"}
              style={{backgroundColor: "black", alignItems: "center"}}
              data={this.props.data}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={300}
            />

                </View>
                
      
            <Pagination
              dotsLength={this.props.data.length}
              activeDotIndex={this.state.activeSlide}
           
              dotStyle={{
                  width: 35,
                  height: 4,
                  borderRadius: 4,
                  marginHorizontal: 8,
                  backgroundColor: '#000000'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.2}
              inactiveDotScale={1.0}
            />

           
           
    
     
 


            </View>
        )
     }
          
         

        
    
}

export default ListTopPictures;
