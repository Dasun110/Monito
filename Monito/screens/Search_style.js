import { StyleSheet } from "react-native";
import { COLORS } from "../constants";


const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:335,
        height:42,
        backgroundColor:COLORS.redrr,
    },
    searchTextContainer:{
        flex:1,
        backgroundColor:COLORS.redrr,

    },
    searchText:{
        fontFamily:"regular",
        width:335,
        height:18.5,
        // left:32,
        alignItems:"center",
        textAlign:"center"
    },
    container:{
        backgroundColor:COLORS.Linear,
        width:"100%",
        height:"100%",
        padding:30
    }
})

export default styles;