import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {
  const isAuthenticated = false; 
  return (
    <Stack>
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
