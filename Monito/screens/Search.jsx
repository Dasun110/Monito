import React,{useState} from "react";
import { View, TextInput, TouchableOpacity,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import styles from './Search_style';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const Search = () => {
    const [searchKey,setSearchKey] = useState('');
    const [searchResults,setSerchResults] = useState([]);
// http://localhost:3000/api/product/search/${searchKey}
    const handlePress =async ()=>{
        try {
            const response = await axios.get(`http://192.168.1.19:3000/api/product/search/${searchKey}`)
            setSerchResults(response.data)
            console.log("----------");
            console.log(response.data);

        } catch (error) {
            console.log("Failed",error)
            
        }
    }


    console.log(searchKey);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity onPress={()=>handlePress()}>
                    <Ionicons name="search" size={24} />
                </TouchableOpacity>
                <View style={styles.searchTextContainer}>
                    <TextInput
                        style={styles.searchText}
                        value={searchKey}
                        onChangeText={setSearchKey}
                        placeholder="Search here..."
                    />
                </View>
            </View>
            {
                searchResults.length===0?(
                    <View style={{flex:1}}>
                        
                    </View>

                ) : (
                    <FlatList
                    data={searchResults}
                    keyExtractor={(item => item._id)}
                    renderItem={({item})=>(<Text>item.title</Text>)}
                    />
                )
            }
        </SafeAreaView>
    );
}

export default Search;
 