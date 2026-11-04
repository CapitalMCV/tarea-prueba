# MEMORY.md - Taller Mecánico Don Ramiro

## Estado actual
- Proyecto iniciado.
- AGENTS.md y constitution.md creados.
- Primera especificación creada en `specs/aprobacion-cotizaciones.md`.
- Skill de diseño de marca creada en `.agents/skills/diseno-marca/SKILL.md`.
- Primera funcionalidad implementada en `index.html`, `styles.css` y `app.js`.
- La página muestra una cotización adicional y permite aprobarla o rechazarla con confirmación explícita.

## Decisiones tomadas
- Utilizar HTML, CSS y JavaScript sin frameworks.
- Aplicar Spec Driven Development.
- Desarrollar una funcionalidad a la vez.
- Las decisiones sobre cotizaciones persistirán al recargar la página en el mismo navegador y dispositivo.
- El rechazo no solicitará un motivo.
- Las decisiones confirmadas serán irreversibles en la primera versión.

## Próximos pasos
- Validar manualmente los criterios de aceptación de la especificación 001 en distintos navegadores y desde 320 px de ancho.

## Aprendizajes y errores a evitar
- La persistencia depende de `localStorage` y se limita al mismo navegador y dispositivo, según la especificación.
