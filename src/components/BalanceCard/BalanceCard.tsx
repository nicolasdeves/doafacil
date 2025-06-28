import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const BalanceCard = () => {
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceLabel}>Saldo</Text>
      <Text style={styles.balanceAmount}>R$200.000,00</Text>
      <TouchableOpacity style={styles.historyButton}>
        <Text style={styles.historyButtonText}>Ver Histórico</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  balanceCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    position: 'relative',
  },
  balanceLabel: {
    color: '#FFF',
    fontSize: 16,
    opacity: 0.9,
    marginBottom: 4,
  },
  balanceAmount: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  historyButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  historyButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
});
