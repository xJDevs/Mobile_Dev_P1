import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Colores } from "@/constants/colores";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // colores del tema para que la tab bar combine con el resto de la app
        tabBarActiveTintColor: Colores.acento,
        tabBarInactiveTintColor: Colores.textoSuave,
        tabBarStyle: { backgroundColor: Colores.tarjeta, borderTopColor: Colores.borde },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="proyectos"
        options={{
          title: "Proyectos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}