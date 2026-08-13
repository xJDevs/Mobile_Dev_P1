import { Pressable, Text } from "react-native";
import { Colores } from "@/constants/colores";

type Props = {
  etiqueta: string;
  activo: boolean;
  onPress: () => void;
};

// boton tipo pastilla para los filtros de categoria
// el prop activo decide los colores, fondo azul solido cuando es el filtro seleccionado
export function Chip({ etiqueta, activo, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: activo ? Colores.acento : Colores.acentoSuave,
      }}
    >
      <Text style={{ color: activo ? "#ffffff" : Colores.acento, fontWeight: "600" }}>
        {etiqueta}
      </Text>
    </Pressable>
  );
}