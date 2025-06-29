import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import NavBar from "../../components/NavBar/NavBar";
import { makeNavigation } from "../../components/NavBar/make-navigation";
import { styles } from "./styles";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect/FormSelect";


export function CreateCampaign() {

const { register, setValue, handleSubmit, control, reset } = useForm<any>({
    defaultValues: {
        type: 'login',
        name: "",
        
    },
    // shouldUseNativeValidation: true,
    // resolver: zodResolver(lineageSchema),
    });
const navigation = makeNavigation();
    
const onSubmit = async (data: any) => {


    };


useEffect(() => {

}, [])

  return (
    <View style={styles.container}>

        <FormInput control={control} name="title" label="Título"/>
        <FormInput control={control} name="description" label="Descrição"/>
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
        <FormInput control={control} name="address" label="Endereço"/>
        <FormInput control={control} name="city" label="City"/>


        <NavBar />

    </View>

  );
}
export default CreateCampaign;
