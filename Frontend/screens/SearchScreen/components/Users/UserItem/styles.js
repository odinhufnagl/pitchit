import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    
    container: {

        flexDirection: "row",
    
        width: "100%",
        height: 65,
        alignItems: "center",
        paddingBottom: 20,
        marginTop: 20,
        justifyContent: "space-between",
        borderBottomColor: "#f1f1f1",
        borderBottomWidth: 1,          
    },
    left: {
        flexDirection: "row",
      

    },

   

    username: {
      
        fontWeight: "bold",
        color: "#000000",
        opacity: 1.0,      
        fontFamily: "Roboto",
        fontSize: 17,

    },
    fullname: {
        
        fontWeight: "bold",
        color: "#828282",
        opacity: 0.8,       
        fontFamily: "Roboto",
        fontSize: 12.5,

        


    },

    image: {
        width: 60, 
        height: 60, 
        borderRadius: 30, 
        marginLeft: 18
    },

     





        }
);

export default styles;