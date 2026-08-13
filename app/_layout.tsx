// no tenemos drawer, lo primero que se ve en la app es el stack 

import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}