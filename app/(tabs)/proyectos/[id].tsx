import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetalleProyecto() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detalle del proyecto {id} (placeholder)</Text>
    </View>
  );
}