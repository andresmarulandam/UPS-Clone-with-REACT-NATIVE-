import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrdersScreen from '../screens/OrdersScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="customers" component={CustomersScreen} />
      <Tab.Screen name="orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
}
