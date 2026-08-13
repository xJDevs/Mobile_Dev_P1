// forma de un proyecto del portafolio
// categoria es un union type, si escribo una categoria que no existe ts me avisa de una vez
export type Proyecto = {
    id: string;
    nombre: string;
    categoria: "Móvil" | "Web" | "Académico";
    resumen: string;
    descripcion: string;
    tecnologias: string[];
  };
  
  // opciones de los chips de filtro en la lista, Todos no es una categoria real
  // sino el estado inicial que muestra todo sin filtrar
  export const CATEGORIAS = ["Todos", "Móvil", "Web", "Académico"];
  
  // data quemada de los proyectos, la pantalla de detalle busca aqui por id
  export const PROYECTOS: Proyecto[] = [
    {
      id: "1",
      nombre: "Navegación Anidada (Lab 1)",
      categoria: "Móvil",
      resumen: "App con Drawer, Tabs y Stack anidados en tres niveles.",
      descripcion:
        "Laboratorio de TPA-4001: estructura de navegación de tres niveles con expo-router — un Drawer como contenedor principal, Bottom Tabs dentro de Home y un Stack dentro del tab Feed para abrir detalles. Verificada en dispositivo real sin crashes.",
      tecnologias: ["React Native", "Expo", "expo-router", "TypeScript"],
    },
    {
      id: "2",
      nombre: "Portafolio Interactivo",
      categoria: "Móvil",
      resumen: "Esta misma app: portafolio con Tabs, Stack, FlatList y filtros.",
      descripcion:
        "Proyecto Programado 1: portafolio profesional interactivo con navegación Stack + Tabs, lista de proyectos con FlatList, filtro por categoría con useState y vistas de detalle por ruta dinámica.",
      tecnologias: ["React Native", "Expo", "useState", "FlatList"],
    },
    {
      id: "3",
      nombre: "Feed estilo red social",
      categoria: "Académico",
      resumen: "Lista de posts con detalle por ruta dinámica.",
      descripcion:
        "Ejercicio del laboratorio: feed de posts hardcodeados con FlatList, cada post abre su vista de detalle usando rutas dinámicas y useLocalSearchParams.",
      tecnologias: ["expo-router", "FlatList", "TypeScript"],
    },
    {
      id: "4",
      nombre: "Página personal",
      categoria: "Web",
      resumen: "Sitio estático con mi información y proyectos.",
      descripcion:
        "Página web personal para practicar maquetado y estilos, base del contenido de este portafolio móvil.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "5",
      nombre: "Control de versiones aplicado",
      categoria: "Académico",
      resumen: "Flujo de branches, merges y reescritura de historia en git.",
      descripcion:
        "Práctica del curso: trabajo con branches por feature, merges fast-forward, amend y reset para mantener un historial limpio y descriptivo, con repositorios publicados en GitHub.",
      tecnologias: ["Git", "GitHub"],
    },
    {
      id: "6",
      nombre: "Catálogo con filtros",
      categoria: "Web",
      resumen: "Listado filtrable por categoría con estado local.",
      descripcion:
        "Ejercicio de listas y estado: catálogo de elementos con chips de filtro por categoría, mostrando manejo de estado local y renderizado condicional.",
      tecnologias: ["JavaScript", "React"],
    },
  ];