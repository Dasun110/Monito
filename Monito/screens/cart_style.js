import { StyleSheet } from "react-native";
import { COLORS } from "../constants/index";
import Home from "./Home";

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.Linear,
        width:"100%",
        height:"100%"
    },
    cart:{
        marginTop:50,
        width:350,
        height:500,
        padding:30,

    },
    title:{
        fontFamily:"bold",
        textAlign:"center",
        fontSize:18

    },
    image:{
        aspectRatio:1,
        resizeMode:'cover' ,
        width:85,
        height:85,
        borderRadius:6
        
    },productTitle:{
        fontSize:18,
        marginLeft:12,
        color:COLORS.primary
    },
    productTitle2:{
        fontSize:14,
        marginLeft:12,
        color:COLORS.NeutralColor_20
    },
    total:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
    },
    totaltext:{
        fontFamily:"bold",
        fontSize:25,

    },
    Button:{
        backgroundColor:COLORS.primary,
        textAlign:"center",
        height:50,
        color:COLORS.white,
        alignItems:"center",
        borderRadius:20,
        padding:10
    }

    
    
})

export default styles