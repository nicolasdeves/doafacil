import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import DonationCard from '../../components/DonationCard/DonationCard';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const uid = auth().currentUser?.uid;
        if (!uid) return;

        const snapshot = await firestore()
          .collection('campaigns')
          .where('createdBy', '==', uid)
          .get();

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCampaigns(data);
      } catch (error) {
        console.error('Erro ao buscar campanhas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
              progress={0.45} // Pode calcular real futuramente
            />
          ))}
        </ScrollView>
      )}
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
