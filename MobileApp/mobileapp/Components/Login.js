// Login.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputNumber from './InputNumber'; // Import the InputNumber component

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.flexContainer}>
        <Text style={styles.parkUpText}>ParkedUI</Text>

        <Text style={styles.headingTitle}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Sign in to book your parking spot</Text>

        {/* Replace the TextInput with InputNumber */}
        <InputNumber
          placeholder="Phone Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        {/* Removed the login button */}

        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </View>
      <Text style={styles.tagline}>Find hassle-free parking spots with ParkedUI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  parkUpText: {
    color: 'blue',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  tagline: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 20,
  },
});

export default Login;
