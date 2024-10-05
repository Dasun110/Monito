// screens/InventoryList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const inventory = [
  {
    id: '1',
    product: 'Frock',
    unit: '50',
    size: 'Large',
    price: 'Rs. 2500',
    stock: 100,
  },
  {
    id: '2',
    product: 'Black Shrit ',
    unit: '20',
    size: 'Medium',
    price: 'Rs. 1775',
    stock: 200,
  },
  {
    id: '3',
    product: 'Short',
    unit: '10',
    size: 'Medium',
    price: 'Rs. 1500',
    stock: 100,
  },
  // Add more inventory items as needed
];

const InventoryList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Product: {item.product}</Text>
      <Text style={styles.details}>Unit: {item.unit}</Text>
      <Text style={styles.details}>Size: {item.size}</Text>
      <Text style={styles.details}>Price: {item.price}</Text>
      <Text style={styles.details}>Stock: {item.stock}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inventory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#FCEED5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: '#00171F',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#00171F',
  },
});

export default InventoryList;
