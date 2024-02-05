import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InputNumber from "./InputNumber";

const Login = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingTitle}>Sign in / Sign up</Text>
        <InputNumber />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 30,
    maxWidth: 300,
  },
  headingTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Login;
