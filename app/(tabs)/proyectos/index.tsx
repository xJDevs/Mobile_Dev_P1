import { useState } from "react";
import { FlatList, View } from "react-native";
import { Chip } from "@/components/Chip";
import { TarjetaProyecto } from "@/components/TarjetaProyecto";
import { Colores } from "@/constants/colores";
import { CATEGORIAS, PROYECTOS } from "@/data/proyectos";

export default function ListaProyectos() {
  // unica pieza de estado de la pantalla, la categoria seleccionada en los chips
  // al cambiarla con setCategoria react vuelve a renderizar y la lista se actualiza sola
  const [categoria, setCategoria] = useState("Todos");

  // lista derivada del estado, no necesita su propio useState
  // porque se recalcula en cada render a partir de categoria
  const proyectosFiltrados =
    categoria === "Todos"
      ? PROYECTOS
      : PROYECTOS.filter((p) => p.categoria === categoria);

  return (
    <View style={{ flex: 1, backgroundColor: Colores.fondo }}>
      {/* fila de chips de filtro, wrap por si no caben en una linea */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, padding: 16 }}>
        {CATEGORIAS.map((c) => (
          <Chip key={c} etiqueta={c} activo={c === categoria} onPress={() => setCategoria(c)} />
        ))}
      </View>
      <FlatList
        data={proyectosFiltrados}
        keyExtractor={(p) => p.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24, gap: 12 }}
        renderItem={({ item }) => <TarjetaProyecto proyecto={item} />}
      />
    </View>
  );
}