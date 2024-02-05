import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./Components/Login";
import MainContainer from "./navigation/MainContainer";
import OnBoarding from "./Components/OnBoarding";

export default function App() {
  return (
    <View style={styles.container}>
      <OnBoarding />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
