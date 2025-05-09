import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text, TouchableOpacity, Dimensions, Image, Linking } from 'react-native';
import { useSelection } from '../context/SelectionContext';
import { videos, Video as VideoType } from '../data/videos';

const { width } = Dimensions.get('window');

const VideoCard = ({ video }: { video: VideoType }) => {
  const handlePress = async () => {
    try {
      await Linking.openURL(video.videoUrl);
    } catch (error) {
      console.error('Error opening video:', error);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.videoCard}
      onPress={handlePress}
    >
      <Image
        source={{ uri: video.thumbnailUrl }}
        style={styles.video}
        resizeMode="cover"
      />
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{video.title}</Text>
        <Text style={styles.videoDescription}>{video.description}</Text>
        <View style={styles.videoMeta}>
          <Text style={styles.difficulty}>{video.difficulty}</Text>
          <Text style={styles.duration}>{video.duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const { selectedSide, selectedMap } = useSelection();

  const filteredVideos = videos.filter(
    video => video.side === selectedSide && video.map === selectedMap
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {selectedMap} - {selectedSide} Side
          </Text>
        </View>
        <FlatList
          data={filteredVideos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <VideoCard video={item} />}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No videos found for selected criteria</Text>
            </View>
          }
        />
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
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  list: {
    padding: 16,
  },
  videoCard: {
    backgroundColor: '#2C2E34',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: 200,
    backgroundColor: '#000',
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    marginBottom: 8,
  },
  videoDescription: {
    color: '#B0B0B0',
    fontSize: 14,
    fontFamily: 'sans-serif',
    marginBottom: 12,
  },
  videoMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficulty: {
    color: '#FFD100',
    fontSize: 14,
    fontFamily: 'sans-serif-medium',
  },
  duration: {
    color: '#B0B0B0',
    fontSize: 14,
    fontFamily: 'sans-serif',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    color: '#B0B0B0',
    fontSize: 16,
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
});
