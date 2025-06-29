import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Controller, Control } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  rules?: object;
}

export const FormSelect = ({
  control,
  name,
  label = '',
  placeholder = 'Selecione...',
  options,
  rules = {}
}: FormSelectProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <RNPickerSelect
            onValueChange={onChange}
            value={value}
            items={options}
            placeholder={{ label: placeholder, value: null }}
            style={pickerSelectStyles}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    marginBottom: 10,
  },
};

export default FormSelect;
