import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       screen: {
           flex: 1,
           backgroundColor: "black",
          

       },
       ButtonInCorner: {
           width: 55, 
           height: 55, 
           backgroundColor: "#5ab9ea", 
           alignSelf: "flex-end", 
           bottom: 22, 
           right: 15, 
           borderRadius: 30, 
           elevation: 10, 
           alignItems: "center", 
           justifyContent: "center", 
           position: "absolute"
        },
        textInput: {
            backgroundColor: "#ffffff", 
            width: 290, 
            borderRadius: 20, 
            height: 40, 
            paddingHorizontal: 10
        },
        imageBackground: {
       
      
            position: "absolute", 
           left: 0,
           right: 0,
           bottom: 0,
           top: 0,
            opacity: 0.40,
            height: 220,
            width: "100%",
          
      
          }
      
      




})


export default styles;