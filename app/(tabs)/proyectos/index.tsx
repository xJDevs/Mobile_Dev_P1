import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ListaProyectos() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>
      <Text>Lista de proyectos</Text>
      <Link href="/proyectos/1">Proyecto 1</Link>
    </View>
  );
}
