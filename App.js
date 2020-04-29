import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            title: 'Login',
          }} />

        <Stack.Screen
          name='Account'
          component={AccountScreen}
          options={{
            title: 'Sua Conta',
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
