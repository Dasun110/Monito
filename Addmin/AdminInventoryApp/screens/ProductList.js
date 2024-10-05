// screens/ProductList.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const products = [
  {
    id: '1',
    name: 'shirt',
    dateCreated: '2024-06-01',
    description: 'shirt',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Black Skirt',
    dateCreated: '2024-06-02',
    description: 'Black Skirt',
    status: 'Inactive',
    
  },
  {
    id: '3',
    name: 'Frock',
    dateCreated: '2024-06-02',
    description: 'Frock',
    status: 'Active',
    
  },
];

const ProductList = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.details}>Date Created: {item.dateCreated}</Text>
      <Text style={styles.details}>Description: {item.description}</Text>
      <Text style={styles.details}>Status: {item.status}</Text>
      <Button title="Delete" onPress={() => {}} 
        color= "#003459"/>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add New Product" onPress={() => {}}
       color= "#003459" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  item: {
    backgroundColor: '#FCEED5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: '#00171F',
  },
  details: {
    fontSize: 14,
    color: '#00171F',
  },
});

export default ProductList;
