import { Stack } from "expo-router";

// el stack raiz solo envuelve la app, el grupo (tabs) se registra solo
// los iconos y titulos de cada tab se configuran en (tabs)/_layout.tsx
export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
