import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import DonationCard from '../../components/DonationCard/DonationCard';
import { finishCampaign, getLoggedUserCamapaigns } from '../../services/campaign/campaign.service';
import NavBar from '../../components/NavBar/NavBar';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trigger, setTriffer] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLoggedUserCamapaigns()

        setCampaigns(data);
      } catch (error) {
        console.error('Erro ao buscar campanhas:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [trigger]);

  useEffect(() => {
    setTriffer(t => t + 1)
  }, [])

  const handleFinishCampaign = async (id) => {
    await finishCampaign(id)
    setTriffer(t => t + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Minhas Campanhas</Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#4CAF50"
          style={{ marginTop: 20 }}
        />
      ) : campaigns.length === 0 ? (
        <Text style={styles.emptyText}>
          Você ainda não criou nenhuma campanha.
        </Text>
      ) : (
        <ScrollView contentContainerStyle={styles.cardList}>
          {campaigns.map(campaign => (
            <DonationCard
              key={campaign.id}
              title={campaign.title}
              source={campaign.address}
              imageUrl={campaign.imageUrl}
              category={campaign.category}
              status={campaign.status}
              progress={0.45} // Pode calcular real futuramente
              onFinish={(() => handleFinishCampaign(campaign.id))}
              phone={campaign.phone}
              email={campaign.email}
            />
          ))}
        </ScrollView>
      )}
      <NavBar />
      
    </View>
  );
};

export default MyCampaigns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F6FA',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  cardList: {
    paddingBottom: 100,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
  },
});
