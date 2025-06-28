import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LabelDonationCard = () => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Última doação</Text>
      <TouchableOpacity>
        <Icon name="keyboard-arrow-right" size={24} color="#666666" />
      </TouchableOpacity>
    </View>
  );
};

export default LabelDonationCard;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
});
