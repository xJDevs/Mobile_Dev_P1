# Portafolio Interactivo

Proyecto Programado 1 — Desarrollo de Aplicaciones Móviles (TPA-4001), FUNDATEC.

Aplicación móvil de portafolio personal hecha con React Native y Expo (SDK 54). Muestra un perfil profesional y un listado de proyectos filtrable por categoría, donde cada proyecto abre su propia pantalla de detalle.

**Autor:** Johel Gómez — [@xJDevs](https://github.com/xJDevs)

---

## Cómo correrlo

Se necesita Node.js instalado y la app **Expo Go** en el celular (o un emulador de Android / simulador de iOS).

```bash
npm install
npx expo start
```

Con el servidor corriendo, se escanea el código QR desde Expo Go. También sirven las teclas `a` para abrir en Android y `i` para iOS.

Scripts adicionales:

```bash
npm run lint       # eslint con la config de expo
npx tsc --noEmit   # revisa los tipos sin generar archivos
```

---

## Pantallas

| Pantalla | Ruta | Qué hace |
|---|---|---|
| **Inicio** | `/` | Perfil: foto, nombre, título, ubicación, resumen profesional y badges de intereses. |
| **Proyectos** | `/proyectos` | Lista de proyectos en `FlatList` con chips para filtrar por categoría. |
| **Detalle** | `/proyectos/[id]` | Información completa del proyecto, sus tecnologías y un botón "Me interesa". |

---

## Navegación

La navegación usa **expo-router**, o sea que la estructura de carpetas dentro de `app/` *es* la estructura de rutas. Hay tres niveles anidados:

```
app/
├── _layout.tsx                 Stack raíz (sin header, solo envuelve la app)
└── (tabs)/
    ├── _layout.tsx             Bottom Tabs — Inicio y Proyectos
    ├── index.tsx               → pantalla de Inicio
    └── proyectos/
        ├── _layout.tsx         Stack anidado dentro del tab Proyectos
        ├── index.tsx           → lista de proyectos
        └── [id].tsx            → detalle, con id dinámico
```

Puntos de la estructura que vale la pena mencionar:

- **`(tabs)` va entre paréntesis** porque es un *route group*: agrupa pantallas bajo un mismo layout sin agregar un segmento a la URL. Por eso `app/(tabs)/index.tsx` responde a `/` y no a `/tabs`.
- **El Stack anidado en `proyectos/`** es lo que hace que el detalle se abra *encima* de la lista, conservando la tab bar y el botón de regresar. Si el detalle estuviera al nivel del Stack raíz, taparía los tabs.
- **`[id].tsx`** es una ruta dinámica. El valor del segmento se lee con `useLocalSearchParams()` y se usa para buscar el proyecto en la data.
- **El título del header del detalle se configura desde la pantalla misma** (con `<Stack.Screen options={...} />`), no desde el layout padre — el layout no conoce cuál proyecto se abrió, así que no podría poner el nombre.

---

## Manejo de estado

Se usa `useState` en dos lugares, ambos con estado local a la pantalla que lo necesita:

**Filtro por categoría** (`app/(tabs)/proyectos/index.tsx`) — el estado guarda únicamente la categoría seleccionada. La lista filtrada **no** es otro estado: se recalcula en cada render a partir de la categoría. Guardarla en su propio `useState` obligaría a sincronizar dos valores que siempre dependen uno del otro, que es justamente donde aparecen los bugs.

```tsx
const [categoria, setCategoria] = useState("Todos");

const proyectosFiltrados =
  categoria === "Todos" ? PROYECTOS : PROYECTOS.filter((p) => p.categoria === categoria);
```

**Botón "Me interesa"** (`app/(tabs)/proyectos/[id].tsx`) — un booleano que alterna al presionar y cambia los colores del botón. Es efímero a propósito: no se persiste porque el proyecto no maneja almacenamiento.

---

## Organización del código

```
components/     Chip y TarjetaProyecto — piezas de UI reutilizables
constants/      colores.ts, la paleta central de la app
data/           perfil.ts y proyectos.ts, los datos quemados
```

Decisiones detrás de esa separación:

- **Los datos viven aparte de las pantallas.** `data/proyectos.ts` exporta el tipo `Proyecto`, el arreglo `PROYECTOS` y las `CATEGORIAS` de los chips. La lista y el detalle consumen la misma fuente, así que agregar un proyecto es tocar un solo archivo.
- **`categoria` es un union type** (`"Móvil" | "Web" | "Académico"`) en lugar de un `string` suelto. Si escribo mal una categoría, TypeScript lo marca al momento y no hasta que un filtro aparezca vacío en el celular.
- **Todos los colores salen de `constants/colores.ts`.** Ningún hex code repetido en las pantallas; cambiar el look completo de la app es editar ese archivo.
- **`Chip` y `TarjetaProyecto` son componentes propios** porque se renderizan en bucle y reciben props. Sacarlos del archivo de la pantalla deja la lógica de la lista legible.

---

## Stack técnico

- **Expo SDK 54** con New Architecture habilitada
- **React Native 0.81** / React 19
- **expo-router 6** — navegación basada en archivos, con `typedRoutes` activo
- **TypeScript** en modo estricto
- **@expo/vector-icons** (Ionicons) para los íconos de los tabs
- **react-native-safe-area-context** para que el contenido no quede bajo el notch

---

## Flujo de trabajo con git

El desarrollo se hizo con una rama por funcionalidad, mergeando a `master` al terminar cada una:

| Rama | Aporte |
|---|---|
| `feat/estructura` | Navegación con tabs y el stack de detalle |
| `feat/proyectos-stack` | Datos del portafolio, filtro por categoría y título dinámico |
| `feat/ui-perfil` | Pantalla de inicio, avatar y la paleta aplicada a la tab bar |

Repositorio: https://github.com/xJDevs/Mobile_Dev_P1
