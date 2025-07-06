import { CAMPAIGN_CATEGORY, CAMPAIGN_STATUS, campaignFirestore, CampaignRequest, userFavoriteFirestore, FAVORITES_COLLECTION } from "./campaign.schema";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
        phone: data.phone,
        email: data.email
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

export async function getCamapaignsUsingFilter(
  status: CAMPAIGN_STATUS[] | CAMPAIGN_STATUS,
  category: CAMPAIGN_CATEGORY
) {
  const statusArray = Array.isArray(status) ? status : [status];

  const snapshot = await campaignFirestore
    .where('status', 'in', statusArray)
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

export async function deleteCampaign(id: string) {
  await campaignFirestore
          .doc(id)
          .delete()
}

export async function finishCampaign(id: string) {
  await campaignFirestore
          .doc(id)
          .update({
            status: CAMPAIGN_STATUS.FINISHED
          })
}

export async function favoriteCampaign(campaignDocId: string) {
  const userId = auth().currentUser?.uid;
  if (!userId) throw new Error('Usuário não autenticado.');

  const favRef = FAVORITES_COLLECTION
    .where('userId', '==', userId)
    .where('campaignId', '==', campaignDocId);

  const snapshot = await favRef.get();

  if (!snapshot.empty) {
    // Já é favorito → desfavoritar
    await Promise.all(snapshot.docs.map(doc => doc.ref.delete()));
    return { favorited: false };
  }

  // Ainda não é favorito → favoritar
  await FAVORITES_COLLECTION.add({
    userId,
    campaignId: campaignDocId,
    createdAt: new Date(),
  });
  return { favorited: true };
}

export async function getFavoriteUserCampaigns() {
  const userId = auth().currentUser?.uid;
  if (!userId) throw new Error('Usuário não autenticado.');

  const favSnapshot = await FAVORITES_COLLECTION
    .where('userId', '==', userId)
    .get();

  const campaignIds = favSnapshot.docs.map(doc => doc.data().campaignId);

  if (campaignIds.length === 0) return [];

  // Firestore permite no máximo 10 itens em um 'in'
  const chunks = [];
  for (let i = 0; i < campaignIds.length; i += 10) {
    chunks.push(campaignIds.slice(i, i + 10));
  }

  const results = await Promise.all(
    chunks.map(async chunk => {
      const snapshot = await campaignFirestore
        .where(firestore.FieldPath.documentId(), 'in', chunk)
        .get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    })
  );

  return results.flat();
}
