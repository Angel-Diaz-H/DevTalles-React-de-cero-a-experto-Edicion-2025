# Análisis de Buenas Prácticas - Curso React de Cero a Experto

Este documento recopila y explica las buenas prácticas de programación identificadas a lo largo de los proyectos del curso (por ejemplo, `04-hooks-app` y `05-heroes-app`). Estas directrices aseguran un código legible, escalable, mantenible y testeable.

---

## 1. Arquitectura y Estructura de Directorios

### 1.1 Estructura por Dominios/Módulos

En lugar de agrupar todo por tipo de archivo a nivel global (todos los componentes juntos, todas las páginas juntas), los proyectos más avanzados (como `05-heroes-app`) estructuran el código por **dominios o módulos funcionales** (ej. `admin`, `heroes`):

```text
src/
├── admin/
│   ├── layouts/
│   └── pages/
├── heroes/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── router/
│   └── app.router.tsx
└── main.tsx
```

- **Ventaja:** Facilita la escalabilidad del proyecto, ya que cada dominio es autónomo y autotenido. Si se elimina o modifica un módulo, el impacto en el resto de la aplicación es mínimo.

### 1.2 Path Aliasing (`@/`)

Se utiliza el alias `@/` configurado en `tsconfig.json` y `vite.config.ts` para apuntar a la carpeta `src/`.

- **Ejemplo:** `import { AdminLayout } from "@/admin/layouts/AdminLayout";`
- **Ventaja:** Evita rutas relativas complejas como `../../../../components` y facilita mover archivos sin romper imports.

---

## 2. Patrón de Diseño para Custom Hooks

Una de las prácticas más sólidas observadas es la estructura clara de retorno en los _Custom Hooks_ (ej. [useTrafficLight.tsx](04-hooks-app\src\hooks\useTrafficLight.tsx)). Los retornos se dividen explícitamente mediante comentarios en tres secciones principales:

1. **Props / State:** Propiedades directas del estado expuestas.
2. **Computed:** Propiedades que se calculan o computan en tiempo de renderizado a partir del estado.
3. **Methods:** Funciones expuestas para alterar el estado o realizar acciones.

```typescript
export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // ... (Efectos e lógica interna)

  return {
    // Props.
    countdown,
    light,
    colors,

    // Computed.
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",

    // Methods.
  };
};
```

- **Ventaja:** Esta separación documenta implícitamente cómo debe interactuar el componente con el hook, aislando los valores brutos, los valores transformados y las acciones.

---

## 3. Enrutamiento Desacoplado y Lazy Loading

El enrutamiento está centralizado en archivos independientes (`router/app.router.tsx`) usando las últimas versiones de React Router:

- Se prefiere la configuración de enrutadores mediante objetos (`createHashRouter` o `createBrowserRouter`) en lugar de declarar rutas directamente en JSX.
- Se implementa **Lazy Loading (carga perezosa)** para optimizar el bundle de producción en páginas no críticas de inicio:
  ```typescript
  const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
  ```
- Se manejan redirecciones por defecto para rutas no encontradas (`path: "*"` redirige a `/` con `<Navigate to="/" />`).

---

## 4. Co-localización de Pruebas Unitarias e Integración

Las pruebas no están en una carpeta global aislada, sino **junto al código fuente que prueban** (mismo directorio).

- **Ejemplo:** `src/router/app.router.tsx` comparte carpeta con `src/router/app.router.test.tsx`.
- **Herramientas:** Vitest y `@testing-library/react`.
- **Prácticas Clave en Tests:**
  - Uso intensivo de `vi.mock` para aislar el componente bajo prueba (mockeando layouts complejos y páginas secundarias).
  - Uso de `createMemoryRouter` de React Router para simular la navegación en memoria y verificar que la ruta correcta renderice el componente esperado.
  - Pruebas de Snapshot (`toMatchSnapshot()`) para asegurar que la configuración de rutas no sufra cambios accidentales.

---

## 5. Tipado Estricto en TypeScript

- Evitar el uso de `any`.
- Definición de tipos basada en constantes mediante `keyof typeof` (ej. `type TrafficLightColor = keyof typeof colors;`).
- Tipado correcto de estados de hooks y props de componentes para garantizar la robustez del desarrollo.
