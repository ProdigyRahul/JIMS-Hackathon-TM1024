import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { initializeApp } from "@react-native-firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmk3cyo0iJnA4V96tbYFpIaoUgTxROTEw",
  authDomain: "tm1024-jims.firebaseapp.com",
  projectId: "tm1024-jims",
  storageBucket: "tm1024-jims.appspot.com",
  messagingSenderId: "436745939121",
  appId: "1:436745939121:web:304b93efd81330af211a90",
};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
