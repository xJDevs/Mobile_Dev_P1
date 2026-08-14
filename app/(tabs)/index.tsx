import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colores } from "@/constants/colores";
import { PERFIL } from "@/data/perfil";

export default function Inicio() {
  return (
    // esta pantalla no tiene header entonces uso SafeAreaView
    // para que el contenido no quede debajo del notch o la status bar
    <SafeAreaView style={{ flex: 1, backgroundColor: Colores.fondo }}>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 16, alignItems: "center" }}>
        {/* avatar cargado por url, es la foto de mi cuenta de github */}
        <Image
          source={{ uri: PERFIL.foto }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 3,
            borderColor: Colores.acento,
          }}
        />

        <View style={{ alignItems: "center", gap: 4 }}>
          <Text style={{ fontSize: 24, fontWeight: "800", color: Colores.texto }}>
            {PERFIL.nombre}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: Colores.acento,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {PERFIL.titulo}
          </Text>
          <Text style={{ color: Colores.textoSuave }}>📍 {PERFIL.ubicacion}</Text>
        </View>

        {/* card con el resumen profesional, mismo estilo de tarjeta que la lista de proyectos */}
        <View
          style={{
            backgroundColor: Colores.tarjeta,
            borderRadius: 14,
            padding: 16,
            borderWidth: 1,
            borderColor: Colores.borde,
          }}
        >
          <Text style={{ fontSize: 15, lineHeight: 22, color: Colores.texto }}>
            {PERFIL.resumen}
          </Text>
        </View>

        {/* un badge por cada interes del array del perfil */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {PERFIL.intereses.map((i) => (
            <Text
              key={i}
              style={{
                backgroundColor: Colores.acentoSuave,
                color: Colores.acento,
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 14,
                fontWeight: "600",
              }}
            >
              {i}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}