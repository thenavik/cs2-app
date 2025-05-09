import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Create Account</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleRegister}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.7}
            >
              <Text style={styles.loginText}>
                Уже есть аккаунт? <Text style={styles.loginTextBold}>Войти</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#2C2E34',
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    padding: width * 0.06,
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
  inputContainer: {
    gap: height * 0.02,
    marginBottom: height * 0.04,
  },
  input: {
    width: '100%',
    backgroundColor: '#2C2E34',
    color: '#FFFFFF',
    borderRadius: width * 0.03,
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.045,
    fontSize: width * 0.045,
    fontFamily: 'sans-serif',
    marginBottom: height * 0.018,
    borderWidth: 1,
    borderColor: '#3A3C40',
  },
  button: {
    backgroundColor: '#FFD100',
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: '#1E1F23',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  loginLink: {
    marginTop: 8,
    alignItems: 'center',
  },
  loginText: {
    color: '#FFD100',
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
  loginTextBold: {
    color: '#ff5678',
    fontWeight: '600',
    fontFamily: 'sans-serif-medium',
  },
}); 