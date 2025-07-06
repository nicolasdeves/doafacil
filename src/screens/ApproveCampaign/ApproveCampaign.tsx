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
import {
  approveCampaign,
  getNonApprovedCamapaigns,
} from '../../services/campaign/campaign.service';

const ApproveCampaign = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState<number>(0);

  const handleApprove = async (id: string) => {
    await approveCampaign(id);
    setTrigger(t => t + 1);
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getNonApprovedCamapaigns();

        setCampaigns(data);
      } catch (error) {
        console.error('Erro ao buscar campanhas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [trigger]);

  useEffect(() => {
    setTrigger(t => t + 1);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
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
                campaignId={campaign.id}
                key={campaign.id}
                title={campaign.title}
                source={campaign.address}
                imageUrl={campaign.imageUrl}
                category={campaign.category}
                progress={0}
                onApprove={() => handleApprove(campaign.id)}
              />
            ))
          )}
        </View>
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
};

export default ApproveCampaign;
