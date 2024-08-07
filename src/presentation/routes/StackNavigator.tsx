/* eslint-disable react-hooks/exhaustive-deps */
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import React, {useEffect} from 'react';
import {ProductScreen} from '../screens/products/ProductScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {useNavigation} from '@react-navigation/native';

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
