# Resumen de Buenas Prácticas y Skills

Este directorio contiene la documentación y las directrices extraídas del análisis de tu código del curso:

1. **[good-practices-analysis.md](/08-resume/good-practices-analysis.md):** Un informe detallado sobre la estructura de directorios, el patrón de diseño para Custom Hooks, enrutamiento, pruebas y TypeScript.
2. **[SKILL.md](/08-resume/SKILL.md):** Una definición de skill estructurada para el modelo de lenguaje (agente de IA).

## Cómo registrar y usar la Skill en tu entorno de Agente

Para hacer que cualquier agente de IA (como Antigravity) use esta skill automáticamente al trabajar en tu proyecto:

1. Crea una carpeta llamada `.agents` en la raíz de este proyecto (si no existe aún).
2. Crea una subcarpeta llamada `skills` dentro de ella: `.agents/skills/`.
3. Crea una carpeta para tu nueva skill, por ejemplo, `.agents/skills/react-devtalles/`.
4. Copia el archivo `SKILL.md` generado en esta carpeta ahí: `.agents/skills/react-devtalles/SKILL.md`.

El agente detectará automáticamente la skill gracias al encabezado YAML y aplicará estas buenas prácticas en todas las tareas posteriores de desarrollo de React que le asignes en este proyecto.
