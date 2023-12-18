import { Image, StyleSheet, ScrollView, TextInput, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamList } from '../navigator/RootNavigator';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function CustomersScreen() {
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const [textInput, setTextInput] = useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={styles.scrollview}>
      <Image
        style={styles.image}
        source={{ uri: 'https://links.papareact.com/3jc' }}
      />

      <TextInput
        placeholder="Search by costumer"
        value={textInput}
        onChangeText={setTextInput}
        style={styles.textInput}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#59C1CC',
  },
  image: {
    width: '100%',
    height: 240,
  },
  textInput: {
    backgroundColor: '#F2F3F4',
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 30,
    height: 60,
  },
});
