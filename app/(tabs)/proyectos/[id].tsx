import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Colores } from "@/constants/colores";
import { PROYECTOS } from "@/data/proyectos";

export default function DetalleProyecto() {
  // id viene del segmento dinamico de la url, ej /proyectos/3 llega como "3"
  const { id } = useLocalSearchParams();
  // estado del boton me interesa, vive solo en esta pantalla
  const [meInteresa, setMeInteresa] = useState(false);
  const proyecto = PROYECTOS.find((p) => p.id === id);

  // guard por si alguien navega a un id que no existe en la data
  if (!proyecto) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Proyecto no encontrado</Text>
      </View>
    );
  }

  return (
    <>
      {/* el titulo del header se configura aqui adentro porque depende del proyecto cargado
          el layout padre no conoce el id asi que no podria ponerlo el */}
      <Stack.Screen options={{ title: proyecto.nombre }} />
      <ScrollView
        style={{ flex: 1, backgroundColor: Colores.fondo }}
        contentContainerStyle={{ padding: 20, gap: 14 }}
      >
        <Text style={{ fontSize: 22, fontWeight: "800", color: Colores.texto }}>
          {proyecto.nombre}
        </Text>
        <Text style={{ color: Colores.acento, fontWeight: "600" }}>{proyecto.categoria}</Text>
        <Text style={{ fontSize: 16, lineHeight: 24, color: Colores.texto }}>
          {proyecto.descripcion}
        </Text>

        {/* badges de tecnologias, una pastilla por cada string del array */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {proyecto.tecnologias.map((t) => (
            <Text
              key={t}
              style={{
                backgroundColor: Colores.acentoSuave,
                color: Colores.acento,
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 12,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              {t}
            </Text>
          ))}
        </View>

        {/* toggle con useState, al presionar invierte el booleano y react repinta el boton */}
        <Pressable
          onPress={() => setMeInteresa(!meInteresa)}
          style={{
            marginTop: 8,
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
            backgroundColor: meInteresa ? Colores.acento : Colores.acentoSuave,
          }}
        >
          <Text style={{ color: meInteresa ? "#ffffff" : Colores.acento, fontWeight: "700" }}>
            {meInteresa ? "★ Te interesa" : "☆ Me interesa"}
          </Text>
        </Pressable>
      </ScrollView>
    </>
  );
}