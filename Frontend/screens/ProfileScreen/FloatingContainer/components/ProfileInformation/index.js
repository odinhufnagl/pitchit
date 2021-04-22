import React from "react";
import { View, FlatList } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

class ProfileInformation extends React.Component{
    constructor(props){
        super(props);
    }


      

    render() {
        
         return(

             <FlatList
             style={{backgroundColor: "#f9f9fb", borderTopLeftRadius: 20, borderTopRightRadius: 20}}
             listKey={"outerFlatlist"}
          
             ListHeaderComponent={
             <View style={{backgroundColor: "f9f9fb"}}>
                 <Header userData={this.props.userData} own={this.props.own}></Header>
                 <Footer userData={this.props.userData} refresh={this.props.refresh} own={this.props.own}></Footer>
             </View>}>

             </FlatList>


         )

    }


}

export default ProfileInformation;