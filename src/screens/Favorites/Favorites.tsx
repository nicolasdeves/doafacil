import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getFavoriteUserCampaigns } from '../../services/campaign/campaign.service';
import DonationCard from '../../components/DonationCard/DonationCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/NavBar/NavBar';
import { styles } from './styles';

const Favorite = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  const removeCampaignFromList = (idToRemove: string) => {
    setCampaigns(prev => prev.filter(campaign => campaign.id !== idToRemove));
  };

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        const data = await getFavoriteUserCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorite();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {campaigns.length === 0 ? (
          <Text>Nenhuma campanha disponível.</Text>
        ) : (
          campaigns.map(campaign => (
            <DonationCard
              campaignId={campaign.id}
              key={campaign.id}
              title={campaign.title}
              source={campaign.source}
              imageUrl={campaign.imageUrl}
              category={campaign.category}
              progress={0.3}
              onUnfavorite={removeCampaignFromList}
              phone={campaign.phone}
              email={campaign.email}
            />
          ))
        )}
      </View>
      
      <NavBar/>
    </SafeAreaView>
  );
};

export default Favorite;
