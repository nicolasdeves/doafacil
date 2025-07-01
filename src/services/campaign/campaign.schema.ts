import { z } from "zod";
import firestore from '@react-native-firebase/firestore';

export const CAMPAIGN_COLLECTION = 'campaign'
export const campaignFirestore = firestore().collection(CAMPAIGN_COLLECTION);
export const fs = firestore();

export const campaignRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['weather', 'education', 'social', 'animal', 'other']),
    image: z.string(), //base64
    // user_id: z.string(),
    status: z.enum(['pending', 'active', 'finished']), //pending => aguardando aprovação
    address: z.string(),
    city: z.string(),

    latitude: z.number(),
    longitude: z.number()
})

export type CampaignRequest = z.infer<typeof campaignRequestSchema>;


// const getAddressFromCoordinates = async (lat: number, lon: number) => {
//     const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     return data.display_name;
//   };

// https://viacep.com.br/ws/RS/Lajeado/Amazonas/json/