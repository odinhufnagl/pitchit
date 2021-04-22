import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
    
        width: "100%",
        height: 50,
        alignItems: "center",
        paddingBottom: 20
             
    },
    left: {
        flexDirection: "row",
        alignItems: "center"
    },

   

    username: {
      
        fontWeight: "bold",
        color: "#000000",
        opacity: 1.0,      
        fontFamily: "Roboto",
        fontSize: 15,

    },
    fullname: {
        
        fontWeight: "bold",
        color: "#828282",
        opacity: 0.8,       
        fontFamily: "Roboto",
        fontSize: 11,

        


    },

    image: {
        width: 55, 
        height: 55, 
        borderRadius: 50, 
        marginLeft: 15
    },

     





        }
);

export default styles;