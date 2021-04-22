import React, { useState } from 'react';
import styles from "./styles";

import { SafeAreaView, StyleSheet, View, FlatList, Image, ImageBackground, Text } from 'react-native';
import FeedGridPost from "./FeedGridPost";
import UpperFilter from "../../screens/FeedScreen/components/UpperFilter";
import { useEffect } from 'react';
import { visitWithTypeInfo } from 'graphql';





const FeedGrid = (props) => {
  
 
  
 
  
 
  return (
     <View style={{marginBottom: 20, marginTop: 15}}>


       <FlatList
       ListHeaderComponent={props.withUpperFilter ? <UpperFilter></UpperFilter> : null}
         data={props.dataPosts}
         renderItem={({ item }) => (
          
           <View style={{ flex: 1, marginBottom: 20, marginHorizontal: 5, height: 270}}>
             <FeedGridPost data={item}></FeedGridPost>
           </View>
         )}
         //Setting the number of column
         numColumns={2}
         keyExtractor={(item, index) => index}
       />
     </View>
   
  );
          
};

export default FeedGrid;

