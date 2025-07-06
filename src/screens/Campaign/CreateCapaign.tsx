import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import NavBar from '../../components/NavBar/NavBar';
import { makeNavigation } from '../../components/NavBar/make-navigation';
import { styles } from './styles';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect/FormSelect';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { create } from '../../services/campaign/campaign.service';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      email: '',
      phone: '',
    },
  });

  const navigation = makeNavigation();
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
        phone: data.phone,
        email: data.email,
      });

      reset();
      setImage(null);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
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
            label="Categoria"
            placeholder="Selecione a categoria"
          />
          <FormInput control={control} name="address" label="Endereço" />
          <FormInput control={control} name="city" label="Cidade" />
          <FormInput control={control} name="email" label="E-mail" />
          <FormInput control={control} name="phone" label="Telefone" />

          <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
            <Text style={styles.imagePickerText}>Selecionar imagem</Text>
          </TouchableOpacity>

          {image && (
            <Image
              source={{ uri: image.uri }}
              style={styles.imagePreview}
            />
          )}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.submitButtonText}>Criar Campanha</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <NavBar/>
    </SafeAreaView>



  );
}
export default CreateCampaign;
