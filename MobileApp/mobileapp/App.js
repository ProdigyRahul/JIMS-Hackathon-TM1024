import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoarding from "./Components/OnBoarding";
import Login from "./Components/Login";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
