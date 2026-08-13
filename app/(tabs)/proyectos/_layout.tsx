import { Stack } from "expo-router";

export default function ProyectosLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Proyectos" }} />
    </Stack>
  );
}