import { StyleSheet } from "react-native";
import { COLORS } from "../constants";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.Linear,
        
    },
    container2:{
        flex:1,
        margin:40,
        marginTop:70,
        
        // padding:50
    },
    profileContainer:{
        flex:1,
        alignItems:"flex-start",
        gap:10
    },
    pofile:{
        height:70,
        width:70,
        borderRadius:99,
        resizeMode:"cover"
    },
    name:{
        fontFamily:"bold",
        color: 'black',
        marginTop:15,
        textAlign:"left"
    },
    loginBtn:{
        backgroundColor:COLORS.primary,
        padding:2,
        borderWidth:0.4,
        borderColor:COLORS.primary,
        borderRadius:40,
        
        width:"auto"
        
    },
    memuText:{
        fontFamily:"regular",
        color:COLORS.Linear,
        fontWeight:'600',
        fontSize:14,
        lineHeight:26,
        margin:8,
    },
    menuWrapper:{
        marginTop:32,
        width:335,
        paddingRight:40
        

    },
    menuItem:(borderBottomWidth)=>(
        {
            borderBottomWidth:borderBottomWidth,
            flexDirection:"row",
            paddingVertical:15,
            paddingHorizontal:30,
            borderColor:"black",
            justifyContent:"space-between"
            
            
            
        }
    ),
    logoutBtn:{
        backgroundColor:COLORS.primary,
        padding:2,
        borderWidth:0.4,
        borderColor:COLORS.primary,
        borderRadius:40,
        marginTop:20,
        paddingLeft:7,
        width:100
    }

})


export default styles;