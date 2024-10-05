import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProductList from '../screens/ProductList';
import InventoryList from '../screens/InventoryList';
import OrderedList from '../screens/OrderedList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ProductList') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'InventoryList') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'OrderedList') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          // Return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="ProductList" component={ProductList} />
      <Tab.Screen name="InventoryList" component={InventoryList} />
      <Tab.Screen name="OrderedList" component={OrderedList} />
    </Tab.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Bauhinia Admin" component={HomeScreen} />
        <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
