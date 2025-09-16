import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';  {/* Corrected from LoginPages to LoginPage */}
import RegisterPage from './src/pages/RegisterPage';
import AdmPage from './src/pages/AdmPage';
import Follow_upPage from './src/pages/Follow_upPage';
import ExperiencePage from './src/pages/ExperiencePage';
import RecoverPassword from './src/pages/recover_password';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        {/* Corrected from LoginPages to LoginPage */}
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="AdmPage" component={AdmPage} />
        <Stack.Screen name="Follow_upPage" component={Follow_upPage} />
        <Stack.Screen name='ExperiencePage' component={ExperiencePage} />
        <Stack.Screen name='recover_password' component={RecoverPassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
