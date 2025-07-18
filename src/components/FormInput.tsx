import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { Controller, Control } from 'react-hook-form';

interface FormInputProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  label?: string;
  rules?: object;
  secureTextEntry?: boolean;
}

export const FormInput = ({
  control,
  name,
  placeholder = '',
  label = '',
  rules = {},
  secureTextEntry = false,
}: FormInputProps) => {
  return (
    <View>
      <Text>{label}</Text>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{
              borderColor: '#aaa',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginBottom: 10,
            }}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry} 
          />
        )}
      />
    </View>
  );
};

export default FormInput;
