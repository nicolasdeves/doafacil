import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState, useEffect } from 'react';
import { favoriteCampaign } from '../../services/campaign/campaign.service';
// import LabelDonationCard from './LabelDonationCard'; // descomente se precisar usar

type DonationCardProps = {
  campaignId: string;
  title: string;
  source: string;
  imageUrl: string;
  category: string;
  progress: number;
  status?: string;
  onApprove?: () => void;
  onReject?: () => void;
  onFinish?: () => void;
  onUnfavorite?: (id: string) => void;
  phone: string;
  email: string;
};

const DonationCard = ({
  campaignId,
  title,
  source,
  imageUrl,
  category,
  progress,
  status,
  onApprove,
  onReject,
  onFinish,
  onUnfavorite,
  phone,
  email
}: DonationCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const favorite = async () => {
    try {
      const result = await favoriteCampaign(campaignId);
      setIsFavorited(result.favorited);

      if (!result.favorited && onUnfavorite) {
        onUnfavorite(campaignId);
      }
      console.log(campaignId);
    } catch (error) {
      console.error('Erro ao favoritar campanha:', error);
    }
  };

  return (
    <View style={styles.donationCard}>
      <View style={styles.donationImageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.donationImage} />
        <View style={styles.educationTag}>
          <Text style={styles.educationTagText}>{category}</Text>
          {
            status && (
              <Text style={styles.educationTagText}>{status}</Text>
            )
          }
        </View>
        
        <TouchableOpacity style={styles.bookmarkButton} onPress={favorite}>
          <Icon
            name="bookmark-border"
            size={20}
            color={isFavorited ? '#4CAF50' : '#666'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.donationInfo}>
        <Text style={styles.donationTitle}>{title}</Text>
        <Text style={styles.donationSource}>{source}</Text>
        <Text style={styles.donationSource}>{phone}</Text>
        <Text style={styles.donationSource}>{email}</Text>

        {/* <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progress * 100}%` }]}
            />
          </View>
          <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
        </View> */}

        {onApprove && (
          <TouchableOpacity style={styles.approveButton} onPress={onApprove}>
            <Text style={styles.approveButtonText}>Aprovar</Text>
          </TouchableOpacity>
        )}

        {onReject && (
          <TouchableOpacity style={styles.approveButton} onPress={onReject}>
            <Text style={styles.approveButtonText}>Desaprovar</Text>
          </TouchableOpacity>
        )}

        {onFinish && (
          <TouchableOpacity style={styles.approveButton} onPress={onFinish}>
            <Text style={styles.approveButtonText}>Finalizar campanha</Text>
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
