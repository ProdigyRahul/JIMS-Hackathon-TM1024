import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NextButton = () => {
  return (
    <View style={styles.container}>
      <Text>NextButton</Text>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flexflex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
