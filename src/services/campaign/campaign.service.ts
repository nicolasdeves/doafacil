import { campaignFirestore, CampaignRequest, fs } from "./campaign.schema";
import auth from '@react-native-firebase/auth';


export async function create(data: CampaignRequest) {
    await campaignFirestore.add({
        title: data.title,
        description: data.description,
        category: data.category,
        address: data.address,
        city: data.city,
        createdAt: new Date(),
        createdBy: auth().currentUser?.uid, // Registra o identificador do usuário pelo hash do documento
        imageUrl: data.image,
        status: 'pending',
        latitude: getLatitudeLongitude(data.city, data.address, true),
        longitude: getLatitudeLongitude(data.city, data.address, false),
      });
}

async function getLatitudeLongitude(city: string, address: string, latitude: boolean) {
    try {
        const endereco = `${address}, ${city}`;
    
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(endereco)}&format=json`;
    
        const response = await fetch(url, {
          headers: {
            "User-Agent": "doafacil",
          }
        });
    
        const data = await response.json();
    
        if (data.length > 0) {
          const { lat, lon } = data[0];
          console.log("Latitude:", lat);
          console.log("Longitude:", lon);
          return latitude ? lat : lon

        } else {
          console.log("Endereço não encontrado");
        }

      } catch (error) {
        console.error("Erro ao buscar lat/lng:", error);
      }
}