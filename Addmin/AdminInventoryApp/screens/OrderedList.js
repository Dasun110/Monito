// screens/OrderedList.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const orderedList = [
  {
    id: '1',
    dateOrdered: '2024-06-10',
    client: 'kamal',
    totalAmount: 'Rs.5000',
    paid: true,
    status: 'Delivered',
    products: [
      { id: '1', name: 'Black Skirt', quantity: 2 },
      { id: '2', name: 'shirt', quantity: 1 },
      { id: '3', name: 'Frock', quantity: 3 },
    ],
  },
  {
    id: '2',
    dateOrdered: '2024-06-09',
    client: 'nimal',
    totalAmount: 'Rs.4000',
    paid: false,
    status: 'Pending',
    products: [
      { id: '4', name: 'shirt', quantity: 1 },
      { id: '5', name: 'Frock', quantity: 2 },
    ],
  },
  // Add more ordered list items as needed
];

const OrderedList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>Date Ordered: {item.dateOrdered}</Text>
      <Text style={styles.details}>Client: {item.client}</Text>
      <Text style={styles.details}>Total Amount: {item.totalAmount}</Text>
      <Text style={styles.details}>Paid: {item.paid ? 'Yes' : 'No'}</Text>
      <Text style={styles.details}>Status: {item.status}</Text>
      <Text style={styles.subtitle}>Products:</Text>
      {item.products.map((product) => (
        <View key={product.id} style={styles.product}>
          <Text style={styles.productText}>{product.name}</Text>
          <Text style={styles.productText}>Quantity: {product.quantity}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orderedList}
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
  subtitle: {
    fontSize: 16,
    color: '#00171F',
    marginTop: 10,
    marginBottom: 5,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productText: {
    fontSize: 14,
    color: '#00171F',
  },
});

export default OrderedList;
