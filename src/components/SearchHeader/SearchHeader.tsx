import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Category'>;
const SearchHeader = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bom dia!</Text>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.searchPlaceholder}>Buscar campanhas...</Text>
        <Icon name="search" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchPlaceholder: {
    color: '#999',
    fontSize: 16,
  },
});
