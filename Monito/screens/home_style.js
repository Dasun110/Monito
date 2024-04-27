import { StyleSheet } from "react-native";
import { COLORS } from "../constants/index";
import Home from "./Home";

const styles = StyleSheet.create({
    textStyle:{
        fontFamily:"bold",
        fontSize:40
    },
   home:{
    width:400,
    // height:743,
    top:44,
    left:20,
   

   },
    background:{
        backgroundColor:COLORS.Linear,
        width: '100%', // Set width to cover full screen
        height: '100%',
    },
    Row:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    head:{
        width:335,
        height:57,
        // paddingTop: 2,
        // paddingRight: 14,
        // paddingBottom: 0,
        // paddingLeft: 10
    },
    Menu:{
        fontSize:32,
        color:COLORS.NeutralColor_100
    },
    title:{
        width:91.58,
        height:21.48,
        fontFamily:"extraBold",
        fontSize:21,
        color:COLORS.TextColor,
        textAlign:"center",

    },
    headText:{
        textAlign:"center",
        fontFamily:"extraBold",
        fontSize:8,
        alignItems:"center"


    },
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:333,
        height:42,
        backgroundColor:COLORS.redrr,
    },
    searchTextContainer:{
        flex:1,
        backgroundColor:COLORS.redrr,

    },
    searchText:{
        fontFamily:"regular",
        width: '100%', // Set width to cover full screen
        height: '100%',
        left:32,
        alignItems:"center",
        textAlign:"center"
    },
    container:{
        width:355,
        height:600,
        gap:30,
        marginTop:24
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"

    },
    headerTitle:{
        fontFamily:"semibold",
        fontSize:24,
        color:COLORS.TextColor2
    }

    
    
})

export default styles