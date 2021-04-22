
import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OuterNavigator from "./NavScreens/OuterNavigator";
import AuthNavigator from './NavScreens/AuthNavigator';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ip_adress from './ip_adress';


const App = () => {
  const client = new ApolloClient({
    uri: ip_adress,
    cache: new InMemoryCache()
  })


 
 
  return (
    

         
             <ApolloProvider client={client}>

               <View style={{flex: 1}}>
                   <StatusBar style="auto" />
              
                 
                   <AuthNavigator></AuthNavigator>
      
               </View>
              
             </ApolloProvider>
    


 
  );



}
export default App;


