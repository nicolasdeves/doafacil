import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import NavBar from '../../components/NavBar/NavBar';
import DonationCard from '../../components/DonationCard/DonationCard';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import CategoryDonationView from '../../components/CategoryDonationView/CategoryDonationView';
import {
  getActiveCampaigns,
  getCampaigns,
} from '../../services/campaign/campaign.service';

const HomeScreen = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        // const data = await getActiveCampaigns();
        const data = await getCampaigns();

        setCampaigns(data);
      } catch (error) {
        console.error('Erro ao buscar campanhas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* <SearchHeader /> */}
        {/* <BalanceCard /> */}

        <CategoryDonationView />

        <View style={{ padding: 16 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#4CAF50" />
          ) : campaigns.length === 0 ? (
            <Text style={{ textAlign: 'center', marginTop: 20 }}>
              Nenhuma campanha disponível.
            </Text>
          ) : (
            campaigns.map(campaign => (
              <DonationCard
                key={campaign.id}
                title={campaign.title}
                source={campaign.address}
                imageUrl={campaign.imageUrl}
                category={campaign.category}
                progress={0.3} // Substitua por cálculo real futuramente
              />
            ))
          )}
        </View>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
