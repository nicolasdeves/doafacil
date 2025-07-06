import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { getCamapaignsUsingFilter } from '../../services/campaign/campaign.service';
import DonationCard from '../../components/DonationCard/DonationCard';
import {
  CAMPAIGN_STATUS,
  CAMPAIGN_CATEGORY,
} from '../../services/campaign/campaign.schema';

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

const CategoryScreen = ({ route }: Props) => {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  // parâmetros que a rota recebe
  const { categoryId } = route.params;

  useEffect(() => {
    const fetchCategoriesCampaigns = async () => {
      try {
        const data = await getCamapaignsUsingFilter(
          [CAMPAIGN_STATUS.ACTIVE, CAMPAIGN_STATUS.FINISHED],
          categoryId as CAMPAIGN_CATEGORY,
        );
        setCampaigns(data);
      } catch (error) {
        console.error('Não foi possível buscar campanhas:', error);
      }
    };
    fetchCategoriesCampaigns();
  }, [categoryId]);

  return (
    <View style={{ padding: 20 }}>
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
          />
        ))
      )}
    </View>
  );
};

export default CategoryScreen;
