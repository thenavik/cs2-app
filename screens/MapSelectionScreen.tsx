import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import MapCard from '../components/MapCard';

const maps = [
  { name: 'Mirage', image: require('../assets/mirage.png') },
  { name: 'Inferno', image: require('../assets/inferno.png') },
  // { name: 'Nuke', image: require('../assets/nuke.png') },
  // { name: 'Overpass', image: require('../assets/overpass.png') },
  // { name: 'Ancient', image: require('../assets/ancient.png') },
  // { name: 'Vertigo', image: require('../assets/vertigo.png') },
  // { name: 'Anubis', image: require('../assets/anubis.png') },
];

export default function MapSelectionScreen() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.centeredContent}>
        <Text style={styles.header}>Select Your Map</Text>
        <ScrollView contentContainerStyle={styles.cardsWrapper} showsVerticalScrollIndicator={false}>
          {maps.map((map) => (
            <MapCard
              key={map.name}
              mapName={map.name}
              image={map.image}
              onPress={() => setSelected(map.name)}
              isSelected={selected === map.name}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F23',
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
    paddingBottom: 40,
  },
}); 