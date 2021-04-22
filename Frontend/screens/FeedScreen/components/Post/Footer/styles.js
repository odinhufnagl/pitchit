import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
       container: {
      width: "100%",
      height: 120,
      
    
  
      paddingLeft: 0,
      paddingTop: 20
      
  

      
       },
       leftContainer: {
           alignItems: "center",
           flexDirection: "row"
       },

       containerUp: {
           height: 40,
           flexDirection: "row",
           alignItems: "center",       
         

       },
       bigText: {
           fontSize: 18,
           fontFamily: "Roboto",
           color: "#ffffff",
           marginLeft: 5,
           marginRight: 20,
           fontWeight: "bold",
           alignSelf: "center"



       },
       smallText: {
           fontSize: 12,
           fontFamily: "Roboto",
           color: "#ffffff",
           fontWeight: "bold",
           paddingRight: 20,
           opacity: 0.8



       },
       content: {
           paddingTop: 5,
           fontSize: 17,
           width: 250,
 
           fontFamily: "Roboto",
           color: "#ffffff",
           fontWeight: "bold",
       },
       published: {
           color: "#ffffff",
           fontFamily: "Roboto",
           fontWeight: "bold",
           fontSize: 13,
           paddingTop: 5,
           opacity: 0.8


       }
           
           
      
       
     

})


export default styles;