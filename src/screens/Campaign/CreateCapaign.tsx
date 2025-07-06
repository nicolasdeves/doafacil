import { View, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import NavBar from '../../components/NavBar/NavBar';
import { makeNavigation } from '../../components/NavBar/make-navigation';
import { styles } from './styles';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { launchImageLibrary } from 'react-native-image-picker';
import { Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import storage from '@react-native-firebase/storage';
import { create } from '../../services/campaign/campaign.service';

// função para fazer o upload da imagem no firestore
const uploadImage = async (image: any) => {
  const reference = storage().ref(`/campaigns/${Date.now()}-${image.fileName}`);
  await reference.putFile(image.uri);
  return reference.getDownloadURL();
};

export function CreateCampaign() {
  const { handleSubmit, control, reset } = useForm<any>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      address: '',
      city: '',
    },
  });
  const navigation = makeNavigation();

  // Adição de dados no firebase
  const onSubmit = async (data: any) => {
    let imageUrl = '';
    try {
      if (image) {
        imageUrl = await uploadImage(image);
      }

      await create({
        title: data.title,
        description: data.description,
        category: data.category,
        address: data.address,
        city: data.city,
        imageUrl: imageUrl,
        status: 'pending',
      });
      console.log(imageUrl);
    } catch (error) {
      console.log(imageUrl);
      console.error('Erro ao criar campanha:', error);
    }
    reset();
    navigation.navigate('Home');
  };

  // Input de imagem
  const [image, setImage] = useState<any>(null);

  const selectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
    });

    if (!result.didCancel && result.assets && result.assets.length > 0) {
      setImage(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
      <FormInput control={control} name="title" label="Título" />
      <FormInput control={control} name="description" label="Descrição" />
      <FormSelect
        control={control}
        name="category"
        options={[
          { label: 'Clima', value: 'weather' },
          { label: 'Educação', value: 'education' },
          { label: 'Social', value: 'social' },
          { label: 'Animal', value: 'animal' },
          { label: 'Outros', value: 'other' },
        ]}
      />
      <FormInput control={control} name="address" label="Endereço" />
      <FormInput control={control} name="city" label="City" />

      {/* Mostra a imagem selecionada e envia para o firestore */}
      <TouchableOpacity onPress={selectImage}>
        <Text>Selecionar imagem</Text>
      </TouchableOpacity>

      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 150, height: 150, marginTop: 10 }}
        />
      )}

      <View>
        <Text onPress={handleSubmit(onSubmit)}>Criar Campanha</Text>
      </View>

      <NavBar />
    </View>
  );
}
export default CreateCampaign;
