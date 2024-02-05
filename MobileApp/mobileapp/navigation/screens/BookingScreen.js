import { View, Text } from "react-native";
import React from "react";

const Booking = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Booking
      </Text>
    </View>
  );
};

export default Booking;
