/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Preciso disso para registrar o tipo da rota
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Category'>;

// Construir algo na base para armazenar as categorias de doação
const doacoesTeste = [
  { id: 1, name: 'Educação', icon: '🎓', color: '#4CAF50' },
  { id: 2, name: 'Clima', icon: '⚠️', color: '#FF9800' },
  { id: 3, name: 'Animal', icon: '🦊', color: '#FF5722' },
  { id: 4, name: 'Social', icon: '🧑', color: '#FF5722' },
  { id: 5, name: 'Todos', icon: '⚡', color: '#2196F3' },
];

const CategoryDonationView = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <Text style={styles.categoryTitle}>Categorias</Text>
      <ScrollView
        // style={styles.categoriesContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {doacoesTeste.map(doacao => (
          <TouchableOpacity
            key={doacao.id}
            style={[styles.categoryItem]}
            onPress={() =>
              navigation.navigate('Category', {
                categoryId: doacao.id,
                categoryName: doacao.name,
              })
            }
          >
            <View
              style={[styles.categoryIcon, { backgroundColor: doacao.color }]}
            >
              <Text style={styles.categoryEmoji}>{doacao.icon}</Text>
            </View>
            <Text style={styles.categoryName}>{doacao.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default CategoryDonationView;

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 16,
  },
  categoryItem: {
    alignItems: 'center',
    // flex: 1,
    marginRight: 12, // ou use o gap acima
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
});
