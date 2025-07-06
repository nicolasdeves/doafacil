import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { getFavoriteUserCampaigns } from '../../services/campaign/campaign.service';
import DonationCard from '../../components/DonationCard/DonationCard';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={{ padding: 20 }}>
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
          />
        ))
      )}
    </SafeAreaView>
  );
};

export default Favorite;
