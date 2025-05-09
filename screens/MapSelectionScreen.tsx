import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import MapCard from '../components/MapCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelection } from '../context/SelectionContext';
import { Map } from '../data/videos';

type RootStackParamList = {
  Home: undefined;
  MapSelection: undefined;
  Selection: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width, height } = Dimensions.get('window');

const maps = [
  { name: 'Mirage', image: require('../assets/mirage.png') },
  { name: 'Inferno', image: require('../assets/inferno.png') },
  { name: 'Nuke', image: require('../assets/nuke.png') },
  { name: 'Ancient', image: require('../assets/ancient.png') },
  { name: 'Dust2', image: require('../assets/dust2.png') },
  { name: 'Anubis', image: require('../assets/anubis.png') },
];

const CARD_WIDTH = width * 0.4;
const CARD_HEIGHT = height * 0.25;
const CARD_GAP = Math.min(width * 0.04, 16);

export default function MapSelectionScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();
  const { setSelectedMap } = useSelection();

  const handleMapSelect = (mapName: string) => {
    setSelected(mapName);
    setSelectedMap(mapName as Map);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.overlay} />
        <View style={styles.centeredContent}>
          <FlatList
            data={maps}
            keyExtractor={item => item.name}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.grid}
            renderItem={({ item, index }) => {
              const isLeft = index % 2 === 0;
              return (
                <View
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    marginBottom: CARD_GAP,
                    marginRight: isLeft ? CARD_GAP / 2 : 0,
                    marginLeft: !isLeft ? CARD_GAP / 2 : 0,
                  }}
                >
                  <MapCard
                    mapName={item.name}
                    image={item.image}
                    onPress={() => handleMapSelect(item.name)}
                    isSelected={selected === item.name}
                  />
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F23',
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20,21,24,0.7)',
    zIndex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Math.min(width * 0.03, 12),
    paddingTop: Math.min(height * 0.03, 24),
    paddingBottom: Math.min(height * 0.03, 24),
    zIndex: 2,
  },
  header: {
    color: '#C2C2C2',
    fontSize: Math.min(width * 0.06, 32),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Math.min(height * 0.03, 32),
    marginTop: Math.min(height * 0.03, 32),
    fontFamily: 'sans-serif-medium',
  },
  grid: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Math.min(height * 0.05, 40),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
}); 