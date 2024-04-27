import { View,Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import Search from '../screens/Search';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants/index";

// Create a bottom tab navigator
const Tab =createBottomTabNavigator();

// Options for the screens
const screensOptions={
    tabBarShowLable:false, // Hide tab bar labels
    tabBarHideOnkeyboard:true, // Hide tab bar when keyboard is shown
    headerShown:false, // Hide header
    tabBarStyle:{
        position:"absolute", // Position the tab bar at the bottom
        bottom:0,
        right:0,
        left:0,
        elevation:0, // Remove elevation (shadow)
        heiht:70 // Typo: should be "height" instead of "heiht"
    }
}

// Bottom navigation component
const BottomNav=()=>{
    return(
        <Tab.Navigator screenOptions={screensOptions}>
            {/* Home screen */}
            <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon:({focused})=>{
                        return <Ionicons name={focused ? "home":"home-outline"} size={24} color={focused ? COLORS.primary : COLORS.primary} /> 
                    }
            }}/>

            {/* Search screen */}
            <Tab.Screen name="Search" component={Search} options={{
                    tabBarIcon:({focused})=>{
                        return <Ionicons name={"search-sharp"} size={24} color={focused ? COLORS.primary: COLORS.primary} /> 
                    }
            }}/>

            {/* Cart screen */}
            <Tab.Screen name="Cart" component={Cart} 
                    options={{
                        tabBarIcon: ({focused}) => {
                            return <Ionicons 
                                        name={focused ? "cart" : "cart-outline"} 
                                        size={24} 
                                        color={focused ? COLORS.primary : COLORS.primary} 
                                    /> 
                        }
                    }}
            />

            {/* Profile screen */}
            <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon:({focused})=>{
                        return <Ionicons name={focused ? "person":"person-outline"} size={24} color={focused ? COLORS.primary : COLORS.primary} /> 
                    }
            }}/>
        </Tab.Navigator>
    )
}

export default BottomNav;
