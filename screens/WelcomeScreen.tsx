import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/welcomebck.png')} style={styles.backgroundImage} />
      <View style={styles.overlayContent}>
        <Image source={require('../assets/smokylogo-white.png')} style={styles.logoImage} />
        
        <View style={styles.card}>
          <Text style={styles.title}>Learning everywhere & everytime</Text>
          <Text style={styles.subtitle}>
            Learn smokes with pleasure with us, wherever you are!
          </Text>
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.bar} />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 550,
    // Для белого цвета используйте белую версию smokylogo.png
  },
  agent: {
    width: width * 0.65, // 65% of screen width
    height: height * 0.3, // 30% of screen height
    marginBottom: height * 0.05, // 5% of screen height
  },
  card: {
    backgroundColor: '#2C2E34',
    width: '100%',
    borderTopLeftRadius: width * 0.1, // 10% of screen width
    borderTopRightRadius: width * 0.1,
    padding: width * 0.06,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: '#3A3C40',
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
  pagination: {
    flexDirection: 'row',
    gap: width * 0.02,
    marginBottom: height * 0.03,
  },
  dot: {
    width: width * 0.025,
    height: width * 0.025,
    backgroundColor: '#FFD100',
    borderRadius: width * 0.0125,
  },
  bar: {
    width: width * 0.06,
    height: width * 0.025,
    backgroundColor: '#FFD100',
    borderRadius: width * 0.0125,
  },
  button: {
    backgroundColor: '#FFD100',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: '#1E1F23',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  secondaryButton: {
    backgroundColor: '#2C2E34',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3A3C40',
  },
  secondaryButtonText: {
    color: '#FFD100',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
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
    justifyContent: 'center',
  },
});
  