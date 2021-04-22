import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    
    
    left: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
        
      

    },

   

    username: {
      
        fontWeight: "bold",
        color: "#000000",
        opacity: 1.0,      
        fontFamily: "Roboto",
        fontSize: 20,

    },
    fullname: {
        
        fontWeight: "bold",
        color: "#828282",
        opacity: 0.8,       
        fontFamily: "Roboto",
        fontSize: 13,

        


    },

    image: {
        width: 70, 
        height: 70, 
        borderRadius: 200, 
        marginLeft: 15
    },
    bio: {
     
        color: "#000000",        
        fontFamily: "Roboto",
        fontSize: 17,
  


    },
    bioContainer: {

        marginLeft: 15, 
        marginRight: 15,
        marginTop: 15
    },
    buttonFollow: {
        borderRadius: 20,
        borderWidth: 1,
        width: 75,
        height: 30,
        borderColor: "#264e68",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        marginTop: 15,
     



    },
    buttonFollowing: {
        borderRadius: 20,
        borderWidth: 2,
        width: 75,
        height: 30,
        borderColor: "#5ab9ea",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        marginTop: 15,
     



    },

     





        }
);

export default styles;