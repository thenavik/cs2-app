import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface SideCardProps {
  side: 'T' | 'CT';
  onPress: () => void;
  isSelected?: boolean;
}

export default function SideCard({ side, onPress, isSelected = false }: SideCardProps) {
  const imageSource = side === 'T'
    ? require('../assets/tagent.png')
    : require('../assets/ctagent.png');
  const label = side === 'T' ? 'T Side' : 'CT Side';

  return (
    <View style={[styles.wrapper, isSelected && styles.selectedWrapper]}>
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        <Image source={imageSource} style={styles.agentImage} />
      </View>
      <TouchableOpacity style={[styles.button, isSelected && styles.selectedButton]} onPress={onPress} activeOpacity={0.8}>
        <Text style={[styles.buttonText, isSelected && styles.selectedButtonText]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  selectedWrapper: {
    // Можно добавить эффект для выбранной карточки
  },
  card: {
    backgroundColor: '#363740',
    borderRadius: 18,
    width: '100%',
    height: 170,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'visible',
    zIndex: 1,
    elevation: 3,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#FFD100',
  },
  agentImage: {
    width: '110%',
    height: 210,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    marginTop: -30,
    zIndex: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#FFD100',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginTop: -10,
    zIndex: 0,
  },
  selectedButton: {
    backgroundColor: '#ffde4d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  selectedButtonText: {
    color: '#363740',
  },
}); 