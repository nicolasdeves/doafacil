import React from 'react';
import { View, Text } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

const CategoryScreen = ({ route }: Props) => {
  // parâmetros que a rota recebe
  const { categoryId, categoryName } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Categoria: {categoryName}</Text>
      <Text>ID: {categoryId}</Text>
    </View>
  );
};

export default CategoryScreen;
