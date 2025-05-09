import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WelcomeScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/newback.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View
        style={[styles.overlayContent, { paddingBottom: insets.bottom || 24 }]}
      >
        <Image
          source={require("../assets/smokylogo-white.png")}
          style={styles.logoImage}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Learning everywhere & everytime</Text>
          <Text style={styles.subtitle}>
            Learn smokes with pleasure with us, wherever you are!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Selection")}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  contentContainer: {
    width: "100%",
    paddingHorizontal: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: "#B0B0B0",
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#FFD100",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 48,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#1E1F23",
    fontSize: 18,
    fontWeight: "bold",
  },
});
