import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Colores } from "@/constants/colores";
import type { Proyecto } from "@/data/proyectos";

// tarjeta que renderiza la FlatList por cada proyecto
export function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  return (
    // asChild hace que el Link no pinte su propio texto y en su lugar
    // convierta la tarjeta entera en el area presionable que navega al detalle
    <Link href={`/proyectos/${proyecto.id}`} asChild>
      <Pressable
        style={{
          backgroundColor: Colores.tarjeta,
          borderRadius: 14,
          padding: 16,
          gap: 6,
          borderWidth: 1,
          borderColor: Colores.borde,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: Colores.texto, flex: 1 }}>
            {proyecto.nombre}
          </Text>
          <Text style={{ fontSize: 12, color: Colores.acento, fontWeight: "600" }}>
            {proyecto.categoria}
          </Text>
        </View>
        <Text style={{ color: Colores.textoSuave }} numberOfLines={2}>
          {proyecto.resumen}
        </Text>
      </Pressable>
    </Link>
  );
}