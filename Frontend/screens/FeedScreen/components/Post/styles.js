import { Dimensions, StyleSheet } from "react-native";


const styles = StyleSheet.create({
       container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
       },
       
       floatingContainer: {
             
              backgroundColor: "#ffffff",
              width: "100%",
              height: "100%",
              
              alignItems: "center",
             

       },
     

})


export default styles;