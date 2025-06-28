import React from 'react';
import { styles } from './styles';
import NavBar from '../../components/NavBar';
import DonationCard from '../../components/DonationCard/DonationCard';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  SafeAreaProvider,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryDonationView from '../../components/CategoryDonationView';
import SearchHeader from '../../components/SearchHeader';
import BalanceCard from '../../components/BalanceCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SearchHeader />

        {/* Cartão que mostra o saldo (mudar depois) */}
        <BalanceCard />

        {/* Botões com categorias */}
        <CategoryDonationView />

        {/* Cartão de doação */}
        <DonationCard />
      </ScrollView>

      {/* NavBar */}
      <NavBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
