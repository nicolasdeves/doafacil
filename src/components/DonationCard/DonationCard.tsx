import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import LabelDonationCard from './LabelDonationCard'; // descomente se precisar usar

type DonationCardProps = {
  title: string;
  source: string;
  imageUrl: string;
  category: string;
  progress: number;
  onApprove?: () => void;
};

const DonationCard = ({
  title,
  source,
  imageUrl,
  category,
  progress,
  onApprove,
}: DonationCardProps) => {
  return (
    <View style={styles.donationCard}>
      <View style={styles.donationImageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.donationImage} />
        <View style={styles.educationTag}>
          <Text style={styles.educationTagText}>{category}</Text>
        </View>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Icon name="bookmark-border" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <View style={styles.donationInfo}>
        <Text style={styles.donationTitle}>{title}</Text>
        <Text style={styles.donationSource}>{source}</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progress * 100}%` }]}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(progress * 100)}%
          </Text>
        </View>

        {onApprove && (
          <TouchableOpacity style={styles.approveButton} onPress={onApprove}>
            <Text style={styles.approveButtonText}>Aprovar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
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
  approveButton: {
    marginTop: 16,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  approveButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
