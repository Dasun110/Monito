import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './home_style';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Product from "../components/product/Product";



const Home = () => {
    const navigation =useNavigation();
    return (
        <GestureHandlerRootView >
            <SafeAreaView style={styles.background}>
                <View style={styles.home}>
                    <View style={styles.head}>
                        <View style={styles.Row}>
                            <Ionicons style={styles.Menu} name="menu-outline" />
                            <Text style={styles.title}>Monito</Text>
                            <Ionicons style={styles.Menu} name="person-circle-outline" />
                        </View>
                        <View>
                            <Text style={styles.headText}>Pat for Best</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.searchContainer}>
                            <TouchableOpacity>
                            <Ionicons name="search" size={24} />
                            </TouchableOpacity>
                            <View style={styles.searchTextContainer}>
                                <TextInput style={styles.searchText}
                                 value="" 
                                 onPressIn={()=>navigation.navigate("Search")}
                                 placeholder="Search here..." />
                            </View>
                        </View>
                        <View style={styles.container} >
                            <View style={styles.header} >
                                <Text  style={styles.headerTitle}>
                                Popular Pets
                                </Text>
                                <TouchableOpacity style={styles.headerTitle}>
                                        <Text>Show all</Text>
                                </TouchableOpacity>

                            </View>
                            <Product />

                        </View>

                    </ScrollView>
                </View>

            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

export default Home;
