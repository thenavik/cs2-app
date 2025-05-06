import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Новые пропорции
const CARD_WIDTH = width * 0.4;
const CARD_HEIGHT = height * 0.25;
const IMAGE_SIZE = width * 0.25;
const BUTTON_HEIGHT = height * 0.08;
const CARD_RADIUS = 18;

interface MapCardProps {
  mapName: string;
  image: any;
  onPress: () => void;
  isSelected?: boolean;
}

export default function MapCard({ mapName, image, onPress, isSelected = false }: MapCardProps) {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.mapImage} />
      </View>
      <TouchableOpacity style={[styles.button, isSelected && styles.selectedButton]} onPress={onPress} activeOpacity={0.8}>
        <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>{mapName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#23242a',
    borderRadius: CARD_RADIUS,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    overflow: 'hidden',
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#B89B00',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 30,
    paddingBottom: 15,
    flex: 1,
  },
  mapImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: 'contain',
  },
  button: {
    width: CARD_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: '#FFD100',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: CARD_RADIUS,
    borderBottomRightRadius: CARD_RADIUS,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  selectedButton: {
    backgroundColor: '#ffde4d',
  },
  buttonText: {
    color: '#23242a',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  selectedButtonText: {
    color: '#fff',
  },
}); 