import { CAMPAIGN_CATEGORY, CAMPAIGN_STATUS, campaignFirestore, CampaignRequest } from "./campaign.schema";
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
        imageUrl: data.imageUrl,
        status: 'pending',
        latitude: await getLatitudeLongitude(data.city, data.address, true),
        longitude: await getLatitudeLongitude(data.city, data.address, false),
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

export async function getCampaigns() {
    const snapshot = await campaignFirestore
      .get();

    const campaigns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return campaigns;
}

export async function getActiveCampaigns() {
    const snapshot = await campaignFirestore
    .where('status', '==', 'active')
    .get();

    const campaigns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return campaigns;
}

export async function getNonApprovedCamapaigns() {
  const snapshot = await campaignFirestore
    .where('status', '==', 'pending')
    .get();

  const campaigns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return campaigns;
}

export async function getCamapaignsUsingFilter(status: CAMPAIGN_STATUS, category: CAMPAIGN_CATEGORY) {
  const snapshot = await campaignFirestore
    .where('status', '==', status)
    .where('category', '==', category)
    .get();

  const campaigns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return campaigns;
}

export async function getLoggedUserCamapaigns() {
  const userId = auth().currentUser?.uid;
  const snapshot = await campaignFirestore
    .where('createdBy', '==', userId)
    .get();

  const campaigns = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return campaigns;
}

export async function approveCampaign(id: string) {
  await campaignFirestore
          .doc(id)
          .update({
            status: CAMPAIGN_STATUS.ACTIVE
          })
}
