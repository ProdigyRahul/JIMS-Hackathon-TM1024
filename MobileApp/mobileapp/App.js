import { useState, useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Components/Login";
import MainContainer from "./navigation/MainContainer";
import OnBoarding from "./Components/OnBoarding";

const Loading = () => {
  <View>
    <ActivityIndicator size="large" />
  </View>;
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setviewedOnBoarding] = useState(false);
  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnBoarding");
      if (value != null) {
        setviewedOnBoarding(true);
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnBoarding();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : viewedOnBoarding ? (
        <MainContainer />
      ) : (
        <OnBoarding />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
