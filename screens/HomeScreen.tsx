import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ paddingBottom: 80 + insets.bottom }}
      >
        <View style={styles.column}>
          <View style={styles.headerSection}>
            <Image source={require('../assets/smokylogo-white.png')} style={styles.logoImage} />
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/He6KGD7VZs/u3my727q_expires_30_days.png" }}
                style={styles.headerImage}
              />
            </View>
            <View style={styles.greetingSection}>
              <View style={styles.greetingTextContainer}>
                <View style={styles.greetingRow}>
                  <Text style={styles.greetingText}>Hi Pedro</Text>
                  <Image
                    source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/He6KGD7VZs/pcwzltja_expires_30_days.png" }}
                    style={styles.avatarImage}
                  />
                </View>
                <Text style={styles.subtitleText}>
                  Today is a good day{'\n'}to learn some smokes!
                </Text>
              </View>
              <View style={styles.blueBox} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => alert("T-side pressed!")}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>T-side</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button2} 
              onPress={() => alert("CT-side pressed!")}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>CT-side</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mapsHeader}>
            <Text style={styles.mapsTitle}>Maps</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>

          <View style={styles.mapsGrid}>
            <View style={styles.mapsColumn}>
              <TouchableOpacity style={styles.mapCard1} activeOpacity={0.7}>
                <Text style={styles.mapText}>Mirage</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mapCard2} activeOpacity={0.7}>
                <Text style={styles.mapText}>Mirage</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mapsColumn}>
              <TouchableOpacity style={styles.mapCard3} activeOpacity={0.7}>
                <Text style={styles.mapText}>Mirage</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mapCard4} activeOpacity={0.7}>
                <Text style={styles.mapText}>Mirage</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomNav, { paddingBottom: insets.bottom }]}>
        <View style={styles.navIcons}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/He6KGD7VZs/klyhvogs_expires_30_days.png" }}
              style={styles.navIcon1}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/He6KGD7VZs/hxdr7btl_expires_30_days.png" }}
              style={styles.navIcon2}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/He6KGD7VZs/1l282k9q_expires_30_days.png" }}
              style={styles.navIcon3}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.indicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1F23',
  },
  scrollView: {
    flex: 1,
  },
  column: {
    flex: 1,
    paddingTop: 47,
  },
  headerSection: {
    marginHorizontal: 21,
    marginBottom: 32,
  },
  logoImage: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginBottom: 35,
  },
  headerImage: {
    width: 39,
    height: 39,
    marginRight: 5,
  },
  greetingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  greetingTextContainer: {
    flex: 1,
    marginRight: 12,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  greetingText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 12,
    fontFamily: 'sans-serif-medium',
  },
  avatarImage: {
    width: 40,
    height: 40,
  },
  subtitleText: {
    color: '#B0B0B0',
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  blueBox: {
    width: 90,
    height: 93,
    backgroundColor: '#2C2E34',
    borderRadius: 15,
    elevation: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 27,
    marginBottom: 25,
    elevation: 2,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFD100',
    borderRadius: 15,
    paddingVertical: 13,
    marginRight: 13,
    alignItems: 'center',
  },
  button2: {
    flex: 1,
    backgroundColor: '#FFD100',
    borderRadius: 15,
    paddingVertical: 13,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1E1F23',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  mapsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 27,
    marginBottom: 25,
  },
  mapsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    fontFamily: 'sans-serif-medium',
  },
  seeAllText: {
    color: '#FFD100',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
    fontFamily: 'sans-serif-medium',
  },
  mapsGrid: {
    flexDirection: 'row',
    marginHorizontal: 23,
    marginBottom: 27,
    gap: 8,
  },
  mapsColumn: {
    flex: 1,
    gap: 18,
  },
  mapCard1: {
    backgroundColor: '#2C2E34',
    borderRadius: 25,
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 23,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#3A3C40',
  },
  mapCard2: {
    backgroundColor: '#2C2E34',
    borderRadius: 25,
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 33,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#3A3C40',
  },
  mapCard3: {
    backgroundColor: '#2C2E34',
    borderRadius: 25,
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 22,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#3A3C40',
  },
  mapCard4: {
    backgroundColor: '#2C2E34',
    borderRadius: 25,
    aspectRatio: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#3A3C40',
  },
  mapText: {
    color: '#FFFFFF',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2C2E34',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 17,
    elevation: 4,
    minHeight: 80,
    borderTopWidth: 1,
    borderColor: '#3A3C40',
  },
  navIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  navIcon1: {
    width: 55,
    height: 55,
    marginRight: 59,
    tintColor: '#FFD100',
  },
  navIcon2: {
    width: 34,
    height: 34,
    marginRight: 71,
    tintColor: '#B0B0B0',
  },
  navIcon3: {
    width: 31,
    height: 31,
    tintColor: '#B0B0B0',
  },
  indicator: {
    width: 18,
    height: 18,
    backgroundColor: '#FFD100',
    borderRadius: 25,
    marginLeft: 97,
  },
});
