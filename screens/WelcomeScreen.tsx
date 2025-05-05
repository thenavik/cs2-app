import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/newback.png')} style={styles.backgroundImage} />
      <View style={styles.overlayContent}>
        <Image source={require('../assets/smokylogo-white.png')} style={styles.logoImage} />
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Learning everywhere & everytime</Text>
          <Text style={styles.subtitle}>
            Learn smokes with pleasure with us, wherever you are!
          </Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Selection')}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
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
  overlayContent: {
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0B0',
    fontFamily: 'sans-serif',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFD100',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#1E1F23',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
});
  