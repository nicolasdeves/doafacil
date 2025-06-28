import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LabelDonationCard from './LabelDonationCard';

const DonationCard = () => {
  return (
    <>
      {/* Se for a ultima doacao aparecer */}
      <LabelDonationCard />

      <View style={styles.donationCard}>
        <View style={styles.donationImageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
            }}
            style={styles.donationImage}
          />
          <View style={styles.educationTag}>
            <Text style={styles.educationTagText}>Education</Text>
          </View>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Icon name="bookmark-border" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.donationInfo}>
          <Text style={styles.donationTitle}>Help Gopal to pay...</Text>
          <Text style={styles.donationSource}>KitaOtang.com</Text>

          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <Text style={styles.progressText}>25%</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default DonationCard;

const styles = StyleSheet.create({
  donationCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  donationImageContainer: {
    position: 'relative',
  },
  donationImage: {
    width: '100%',
    height: 160,
  },
  educationTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  educationTagText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFF',
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donationInfo: {
    padding: 16,
  },
  donationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  donationSource: {
    fontSize: 12,
    color: '#4CAF50',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginRight: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
    width: '25%',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },
});
