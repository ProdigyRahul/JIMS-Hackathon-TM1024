import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import InputNumber from "./InputNumber";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const loginNavigation = useNavigation();

  const handleGetOTP = () => {
    // Navigate to the 'Home' tab in MainContainer
    loginNavigation.navigate("Home");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.flexContainer}>
        <Text style={styles.parkUpText}>ParkedUP</Text>

        <Text style={styles.headingTitle}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Sign in to book your parking spot</Text>

        <InputNumber
          placeholder="Phone Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          onPressGetOTP={handleGetOTP}
        />

        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </View>
      <Text style={styles.tagline}>
        Find hassle-free parking spots with ParkedUI
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  parkUpText: {
    color: "#468FCC",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  forgotPassword: {
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
  tagline: {
    textAlign: "center",
    color: "#888888",
    marginVertical: 20,
  },
});

export default Login;
