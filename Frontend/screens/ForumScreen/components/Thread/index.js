import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import BoxShadow from "react-native-shadow";
class Thread extends React.Component{
      constructor(props){
          super(props)

      }

      render(){
         

        return(

            <View style={styles.container}>
                <View style={styles.floatingContainer}>
                <Header data={this.props.data}></Header>
                <Body data={this.props.data}></Body>
                <Footer data={this.props.data}></Footer>
                </View>
           
               
                

            </View>
        )
      }


}



export default Thread;