// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bauhinia Admin</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Product List"
          onPress={() => navigation.navigate('HomeTabNavigator', { screen: 'ProductList' })}
          style={styles.button}
          color= "#003459"
        />
        <Button
          title="Inventory List"
          onPress={() => navigation.navigate('HomeTabNavigator', { screen: 'InventoryList' })}
          style={styles.button}
          color= "#003459"
        />
        <Button
          title="Ordered List"
          onPress={() => navigation.navigate('HomeTabNavigator', { screen: 'OrderedList' })}
          style={styles.button}
          color= "#003459"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: '#003459',
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: 500,
  },
  button: {
  justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    backgroundColor: "#FCEED5",
    color: "#003459",
  },
});

export default HomeScreen;
