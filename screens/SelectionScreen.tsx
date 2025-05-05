import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import SideCard from '../components/SideCard';

export default function SelectionScreen({ navigation }: any) {
  const [selected, setSelected] = useState<'CT' | 'T' | null>(null);

  const handleSelect = (side: 'CT' | 'T') => {
    setSelected(side);
    navigation.navigate('MapSelection');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/selectScreen.png')} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.centeredContent}>
        <Text style={styles.header}>Select Your Team to Start</Text>
        <View style={styles.cardsWrapper}>
          <SideCard
            side="CT"
            onPress={() => handleSelect('CT')}
            isSelected={selected === 'CT'}
          />
          <SideCard
            side="T"
            onPress={() => handleSelect('T')}
            isSelected={selected === 'T'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F23',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(30,31,35,0.7)',
    zIndex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
    zIndex: 2,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'sans-serif-medium',
  },
  cardsWrapper: {
    width: '100%',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 