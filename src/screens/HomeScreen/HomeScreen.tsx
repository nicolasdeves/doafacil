import React from 'react';
import { styles } from './styles';
import NavBar from '../../components/NavBar';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const doacoesTeste = [
  { id: 1, name: 'Education', icon: '🎓', color: '#4CAF50' },
  { id: 2, name: 'Disaster', icon: '⚠️', color: '#FF9800' },
  { id: 3, name: 'Animal', icon: '🦊', color: '#FF5722' },
  { id: 4, name: 'Other', icon: '⚡', color: '#2196F3' },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Bom dia!</Text>
          <TouchableOpacity style={styles.searchContainer}>
            <Text style={styles.searchPlaceholder}>Buscar campanhas...</Text>
            {/* <Icon name="search" size={20} color="#999" /> */}
          </TouchableOpacity>
        </View>

        {/* Cartão que mostra o saldo (mudar depois) */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Saldo</Text>
          <Text style={styles.balanceAmount}>R$200.000,00</Text>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>Ver Histórico</Text>
          </TouchableOpacity>
        </View>

        {/* Botões com categorias */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {doacoesTeste.map(doacao => (
            <TouchableOpacity key={doacao.id} style={styles.categoryItem}>
              <View
                style={[styles.categoryIcon, { backgroundColor: doacao.color }]}
              >
                <Text style={styles.categoryEmoji}>{doacao.icon}</Text>
              </View>
              <Text style={styles.categoryName}>{doacao.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Cartão com última doação */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { marginTop: '24' }]}>
            Última doação
          </Text>
          <TouchableOpacity>
            <Icon name="keyboard-arrow-right" size={24} color="#666666" />
          </TouchableOpacity>
        </View>

        {/* Cartão de doação */}
        <View style={styles.donationCard}>
          <View style={styles.donationImageContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
              }}
              style={styles.donationImage}
            />
            <View style={styles.educationTag}>
              <Text style={styles.educationTagText}>Education</Text>
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Icon name="bookmark-border" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.donationInfo}>
            <Text style={styles.donationTitle}>Help Gopal to pay...</Text>
            <Text style={styles.donationSource}>KitaOtang.com</Text>

            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '25%' }]} />
              </View>
              <Text style={styles.progressText}>25%</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* NavBar */}
      <NavBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
