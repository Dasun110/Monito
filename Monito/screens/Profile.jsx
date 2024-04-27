import {StyleSheet, View,Text,Image, TouchableOpacity, Alert } from "react-native";
import React ,{useEffect,useState}from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./profile_style";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../constants";
import{Ionicons} from '@expo/vector-icons';// Importing Ionicons from Expo vector icons




const Profile=({navigation})=>{
    const[userData,setUserData]=useState(null)
    // this useState are "false you can see login form "
    const[userLogin,setUserLogin]=useState(false) 

    const logout=()=>{
        Alert.alert(
            "Logout",
            "Are you sure you want to logout",
            [
                {
                    text:"Cancel",onPress:()=>console.log("cancel")
                },
                {
                    text:"Continue",onPress:()=>console.log("logout")
                },
                {defaultIndex:1}

            ]
        )
    }



    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <StatusBar backgroundColor={COLORS.Linear}/>
                <View style={styles.profileContainer}>
                    <Image source={{uri:"https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?compress=1&resize=1600x1200&vertical=top"}}
                    style={styles.pofile}/>

                    <Text style={styles.name} >
                        {userLogin===true? "userData.name":"Please loging into your account"}
                    </Text>
                    {userLogin===false?(
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <View style={styles.loginBtn}>
                                <Text style={styles.memuText}>LOGIN </Text>

                            </View>
                        </TouchableOpacity>
                    ):(
                        <View style={styles.loginBtn}>
                                <Text style={styles.memuText}>Nuwin@Nuwin.com </Text>

                        </View>
                    )

                    }
                    {userLogin===false?(
                       <View>

                        </View>
                    ):(
                        <View>
                                <View style={styles.menuWrapper}>
                                    <TouchableOpacity>
                                        <View style={styles.menuItem(0.2)}>
                                        <Text style={{ color: 'black' }}>Personal information</Text>
                                        <Ionicons name="chevron-forward-outline" size={24}/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.menuItem(0.2)}>
                                        <Text style={{ color: 'black' }}>My Orders</Text>
                                        <Ionicons name="chevron-forward-outline" size={24}/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.menuItem(0.2)}>
                                        <Text style={{ color: 'black' }}>Payments</Text>
                                        <Ionicons name="chevron-forward-outline" size={24}/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.menuItem(0.2)}>
                                        <Text style={{ color: 'black' }}>Notifications</Text>
                                        <Ionicons name="chevron-forward-outline" size={24}/>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={styles.menuItem(0.2)}>
                                        <Text style={{ color: 'black' }}>Favourites</Text>
                                        <Ionicons name="chevron-forward-outline" size={24}/>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                            <TouchableOpacity onPress={()=>logout()}>
                                <View style={styles.logoutBtn}>
                                    <Text style={styles.memuText}>LOG OUT</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        
                    )

                    }

                </View>
            </View>
        </View>
    )
}

export default Profile;


