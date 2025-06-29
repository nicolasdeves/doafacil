import React from 'react';
import { styles } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import DonationCard from '../../components/DonationCard/DonationCard';

import { SafeAreaView, ScrollView } from 'react-native';
import CategoryDonationView from '../../components/CategoryDonationView/CategoryDonationView';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import BalanceCard from '../../components/BalanceCard/BalanceCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        {/* <SearchHeader /> */}

        {/* Cartão que mostra o saldo (mudar depois) */}
        {/* <BalanceCard /> */}

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
