import React from "react";
import { FlatList, View, Dimensions, Text, Button, TouchableOpacity, RefreshControl, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import Post from "../Post";
import FeatherIcon from "react-native-vector-icons/Feather";
import axios from "axios";
import styles from "./styles";
import AnimatedLoader from "react-native-animated-loader";
import POST_LIST_FOLLOWING_QUERY from "../../../../queries/POST_LIST_FOLLOWING_QUERY";
import POST_LIST_FILTERED_QUERY from "../../../../queries/POST_LIST_FILTERED_QUERY";
import ip_adress from "../../../../ip_adress";




class Feed extends React.Component{
  

  constructor(props){

    
    super(props)
    
    this.state = {items: [], data: [], childKey: 0, refreshing: false, loading: true, start: this.props.start, end: this.props.end}
    this.videoRefs = {};
    this.loading = true;
   
    this.refreshing = false;
   
    

  }

  fetchData = async (start, end) => {
 
     
     const queryResult = await axios.post(ip_adress, {query: this.props.query, variables:  {...this.props.variables, ...{start: start, end: end}}})

     console.log(queryResult.data.data.postListFollowing);
     this.setState({data: this.state.data.concat(
      this.props.query == POST_LIST_FOLLOWING_QUERY ? queryResult.data.data.postListFollowing : (this.props.query == POST_LIST_FILTERED_QUERY ? queryResult.data.data.postListFiltered : null)), 
      start: this.state.start + 8, 
      end: this.state.end + 8,
    loading: false});
     
   
  

     
     
   
   }

  


  componentDidMount() {
    this.fetchData(this.state.start, this.state.end)
 
  
  

  
    
  } 
  


  
 

 
     
  _renderItem = ({item}) => {   
     
       
        return (
      
           <View style={this.props.screen != "feed" ? {marginBottom: 50} : null}>

             <Post ref={(ref) => {this.videoRefs[item.id] = ref;}} data={item} key={this.state.childKey} screen={this.props.screen}></Post>               
           </View>
         
                           
        );
        }
        

  _onViewableItemsChanged = (props) => {
    const changed = props.changed;
  
    changed.forEach((item) => {

      const cell = this.videoRefs[item.item.id];
     
      if (cell && cell.data.imageorvideo == "video") {
        item.isViewable ? cell.play() : cell.pause()        
           }
      });
     }


  refetch_query = () => {
    console.log("hello")
    this.setState({loading: true})
   
    
      
    typeof this.flatListRef.scrollToOffset != undefined ? this.flatListRef.scrollToOffset({offset: 0, animated: true}) : null;
  
    this.props.refreshList();

   

   
    

  }

  renderMoreItems = () => {
    console.log("huihuih")
 
    console.log("end reached")
    this.fetchData(this.state.start, this.state.end)

  }


   render(){
    if(this.state.loading){
    
      return (<AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../../../../assets/8675-loader.json")}
        animationStyle={{width: 50, height: 50}}
        speed={1}
      ></AnimatedLoader>)
    }

    if(this.state.data.length == 0) {
      if (this.props.screen == "feed"){
      return (
        <View style={{flex: 1}}>


        <FlatList
        style={{flex: 1}}
        ref={(ref) => this.flatListRef = ref}  
        onRefresh={this.refetch_query}
        refreshing={this.state.refreshing}
        ListHeaderComponent={
          <View style={{flex: 1, justifyContent: "center", alignItems: "center", height: Dimensions.get("window").height - 135}}>
            <Text style={{fontFamily: "Roboto", fontSize: 25, fontWeight: "bold", marginBottom: 20, textAlign: "center"}}>No uploads available. Start following creators to see their content</Text>
            <TouchableOpacity style={{backgroundColor: "#ffffff", justifyContent: "center", alignItems: "center", width: 200, height: 50, borderRadius: 50}} onPress={() => {this.props.navigation.navigate("Explore")}}><Text style={{fontFamily: "Roboto", fontSize: 15, fontWeight: "bold"}}>Go to Explore</Text></TouchableOpacity>
          </View>
        }
        >

        </FlatList>
        <View style={styles.floatingButtonInCorner}>

            <TouchableOpacity onPress={() => {navigation.navigate("CreatePost", {refreshList: refreshList})}}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>

            <FeatherIcon name={"plus"} size={30} color={"white"}></FeatherIcon>


            </View>
            </TouchableOpacity>
           
          
           
    
        </View>
        </View>
        

      )
      }
      else {return(<View style={{alignSelf: "center"}}><Text style={{textAlign: "center"}}>No feed available</Text></View>)}
    }
 

  
       return(
         <View>
          
        
             <FlatList
             
           
             ref={(ref) => this.flatListRef = ref}  
             listKey={"feed"}
             onRefresh={this.refetch_query}
             refreshing={this.refreshing}
        
             
             key={this.props.refreshState}
            
             viewabilityConfig={{ viewAreaCoveragePercentThreshold: 80 }}
                 snapToAlignment={'top'}   
                 pagingEnabled={true}
                 scrollEnabled={true}
                 decelerationRate={'fast'}
                 data={this.state.data}
             
                 keyExtractor={(item, index) => `id_${index}`}  
                 onViewableItemsChanged={this._onViewableItemsChanged}
                 renderItem={this._renderItem}
                 showsVerticalScrollIndicator={false}
                 onEndReached={() => {this.renderMoreItems()}}
                 onEndReachedThreshold={0.3}
                 
               
              

               
             >

             </FlatList>
            
           
         
       </View>
       )
      }
     
       }
      
      
export default Feed;