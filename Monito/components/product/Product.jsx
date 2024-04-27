import React from "react";
import { FlatList, Text, View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import ProductCard from "./ProductCard";
import useFetch from "../../hook/useFetch";
import { COLORS } from "../../constants";

const Product = () => {
  const {data,isLoading,error} = useFetch();

  const numColumns = 2;
  const screenWidth = Dimensions.get("window").width;

  // Calculate the width for each item including the gap
  const itemWidth = (screenWidth - (numColumns + 1) * 12) / numColumns;

  return (
    <View>
      {isLoading ?(
        <ActivityIndicator size={24} color={COLORS.primary}/>
      ):error ?(
        // <Text>Something went wrong</Text>
        console.log(error)
      ):(
      <FlatList
        data={data}
        keyExtractor={(item)=>item._id}  
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { width: itemWidth }]}>
            <ProductCard item={item} />
          </View>
        )}
        contentContainerStyle={styles.flatListContainer}
        numColumns={numColumns}
      />)}

    </View>

  );
};

const styles = StyleSheet.create({
  flatListContainer: {
 
    justifyContent: "space-between", // Items will be spaced evenly
  },
  itemContainer: {
    marginBottom: 12, // Gap between each row
  },
});

export default Product;
