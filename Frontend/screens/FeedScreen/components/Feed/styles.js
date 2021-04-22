import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

     refreshButton: {
        width: 35, 
        height: 35, 
        backgroundColor: "#d1d1d1", 
        
        alignSelf: "center", 
        top: 12, 
        borderRadius: 30, 
        elevation: 10, 
        alignItems: "center", 
        justifyContent: "center", 
        position: "absolute",
        opacity: 0.7,
        zIndex: 1

     },
     floatingButtonInCorner: {
      width: 55, 
      height: 55, 
      backgroundColor: "#5ab9ea", 
      alignSelf: "flex-end", 
      bottom: 22, 
      right: 15, 
      borderRadius: 30, 
      alignItems: "center", 
      justifyContent: "center", 
      position: "absolute",
   
     },
    



})

export default styles;