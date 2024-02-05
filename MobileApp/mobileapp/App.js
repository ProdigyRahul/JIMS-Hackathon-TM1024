import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Components/Login";

export default function App() {
  return (
    <View>
      <View>
        <Login />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
