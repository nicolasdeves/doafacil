import { z } from "zod";
import firestore from '@react-native-firebase/firestore';

export const CAMPAIGN_COLLECTION = 'campaign'
export const FAVORITES_COLLECTION = firestore().collection('campaign_favorites');
export const campaignFirestore = firestore().collection(CAMPAIGN_COLLECTION);
export const userFavoriteFirestore = firestore().collection('FAVORITES_COLLECTION');
export const fs = firestore();

export enum CAMPAIGN_STATUS {
    PENDING = 'pending',
    ACTIVE = 'active',
    FINISHED = 'finished'
}

export enum CAMPAIGN_CATEGORY {
    WHEATHER = 'weather',
    EDUCATION = 'education',
    SOCIAL = 'social',
    ANIAML = 'animal',
    OTHER = 'other'
}

export const campaignRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['weather', 'education', 'social', 'animal', 'other']),
    imageUrl: z.string().url(), // URL da imagem no Firebase Storage
    status: z.enum(['pending', 'active', 'finished']), //pending => aguardando aprovação
    address: z.string(),
    city: z.string(),
})

export type CampaignRequest = z.infer<typeof campaignRequestSchema>;


// const getAddressFromCoordinates = async (lat: number, lon: number) => {
//     const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.display_name;
//   };

// https://viacep.com.br/ws/RS/Lajeado/Amazonas/json/