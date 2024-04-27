import { StyleSheet } from "react-native";
import { COLORS } from "../constants";



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.Linear
    },
    upperRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        alignItems:"center",
        position:"absolute",
        top:44,
        width:345,
        zIndex:999

    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    details:{
        margin:15,
        top:10,
        backgroundColor:COLORS.Linear,
        gap:10
    },
    title:{
        fontFamily:"bold",
        fontSize:32,
        color:COLORS.NeutralColor_100,
        margin:7,
    },
    price:{
        fontFamily:"semiBold",
        fontSize:24,
        color:COLORS.NeutralColor_100,
        margin:7,
        
    },
    infoTitleRow:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        margin:7,
    },
    infoTitle:{
        fontFamily:"medium",
        fontSize:22,
        margin:7,
    },
    detailsDiscription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        margin:7,
    },
    column: {
        flex: 1,
    },
    label: {
        fontFamily:"regular",
        fontSize: 16,
        color:COLORS.NeutralColor_60

    },
    value: {
        fontFamily:"regular",
        fontSize: 16,
        color:COLORS.NeutralColor_60
    },
    footer:{

        marginBottom: 10,
        margin:7,
        width:350,
        height:100,
        backgroundColor:COLORS.Linear2,
        borderRadius:15,
        padding:17,
    },
    row1:{
        flexDirection:"row",
        margin:4

    },
    contactInfo:{
        width:"100%",
        height:115,
        backgroundColor:COLORS.white,
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25,
    },
    contactInfoRow:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        margin:20,
    },
    contactus:{
        width:140,
        height:52,
        backgroundColor:COLORS.primary,
        borderRadius:60,
    },
    contactusText:{
       
        textAlign:"center",
        alignItems:"center",
        padding:15,
        textTransform: 'uppercase',
        fontWeight: 'bold'

    },
    chat: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        width: 200,
        height: 52,
        backgroundColor: COLORS.white,
        borderRadius: 60,
        borderWidth: 2, // Adding borderWidth
        borderColor: COLORS.primary,
        textAlign: "center",
        alignItems: "center",

      }

})

export default styles;