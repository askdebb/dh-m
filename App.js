import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/Splashscreen';
import SignupPage from './src/screens/SignUp';
import SignInPage from './src/screens/SignIn';
import GetStartedScreen from './src/screens/GetStartedScreen';
import Onboarding from './src/screens/Onboarding';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="SignUp" component={SignupPage} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignInPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
