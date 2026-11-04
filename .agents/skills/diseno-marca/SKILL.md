---
name: Diseño de marca Don Ramiro
description: Aplica la identidad visual, los componentes y las reglas responsivas del Taller Mecánico Don Ramiro al diseñar o revisar interfaces de la aplicación.
---

# Diseño de marca del Taller Mecánico Don Ramiro

Usa esta skill al crear, modificar o revisar cualquier pantalla de la aplicación. Conserva una apariencia moderna, sencilla, confiable y relacionada con el sector automotriz, sin agregar funcionalidades que no estén definidas en la especificación correspondiente.

## Principios visuales

- Prioriza claridad, confianza y facilidad de uso sobre la decoración.
- Inspira el diseño en un taller moderno mediante tonos grafito, acero y naranja, sin recurrir a fondos recargados, texturas metálicas ni ilustraciones innecesarias.
- Mantén jerarquías visuales evidentes y suficiente espacio entre elementos.
- Usa los colores semánticos junto con texto o iconos; nunca comuniques un estado únicamente mediante el color.
- Garantiza un contraste mínimo de 4.5:1 para texto normal y de 3:1 para texto grande y controles gráficos.

## Paleta de colores

Aplica estos colores de forma consistente:

| Uso | Color | Hexadecimal |
| --- | --- | --- |
| Primario, encabezados y navegación | Grafito oscuro | `#0F172A` |
| Acento de marca y acción principal | Naranja automotriz oscuro | `#C2410C` |
| Acento al pasar el cursor o presionar | Naranja profundo | `#9A3412` |
| Fondo general | Gris muy claro | `#F8FAFC` |
| Superficies y tarjetas | Blanco | `#FFFFFF` |
| Texto principal | Carbón | `#111827` |
| Texto secundario | Gris acero | `#475569` |
| Bordes y separadores | Gris claro | `#CBD5E1` |
| Foco visible y enlaces | Azul intenso | `#2563EB` |
| Éxito o aprobación | Verde oscuro | `#15803D` |
| Error o rechazo | Rojo oscuro | `#B91C1C` |
| Advertencia o estado pendiente | Ámbar oscuro | `#B45309` |

- Usa el naranja como acento, no como fondo dominante de toda la pantalla.
- Reserva verde, rojo y ámbar para estados y acciones con su significado correspondiente.
- Sobre fondos oscuros o de acción utiliza texto blanco; sobre fondos claros utiliza el texto principal.

## Tipografía y estilo visual

- Usa una pila tipográfica del sistema, sin dependencias externas: `system-ui`, `-apple-system`, `"Segoe UI"`, `Roboto`, `Arial`, `sans-serif`.
- Emplea peso 700 en títulos, 600 en subtítulos y botones, y 400 en texto general.
- Usa como referencia: 28–32 px para el título principal, 20–24 px para títulos de sección y 16 px como mínimo para texto y controles.
- Mantén una altura de línea aproximada de 1.5 en párrafos y textos descriptivos.
- Alinea el contenido principalmente a la izquierda. Alinea importes a la derecha cuando aparezcan en listas o resúmenes.
- Usa bordes limpios, esquinas moderadamente redondeadas de 8–12 px y sombras suaves solamente para separar tarjetas del fondo.
- Evita mayúsculas sostenidas, efectos brillantes, degradados intensos y animaciones decorativas.

## Botones

- Los botones deben medir al menos 44 × 44 px y tener etiquetas claras que describan la acción.
- Usa relleno horizontal suficiente, texto seminegrita y esquinas redondeadas de 8 px.
- Acción principal: fondo naranja automotriz oscuro y texto blanco.
- Aprobación: fondo verde oscuro y texto blanco.
- Rechazo: fondo rojo oscuro y texto blanco.
- Acción secundaria o cancelación: fondo blanco, texto grafito y borde gris claro.
- Muestra estados visibles de reposo, foco, interacción y deshabilitado.
- El foco de teclado debe ser claramente visible mediante un contorno azul que no dependa del cambio de color del fondo.
- No uses solo iconos en acciones importantes; acompáñalos siempre con una etiqueta de texto.
- En decisiones irreversibles, diferencia con claridad la acción de confirmar de la acción de cancelar.

## Tarjetas

- Presenta vehículos, cotizaciones y resúmenes dentro de tarjetas blancas sobre el fondo gris claro.
- Usa borde gris claro de 1 px, radio de 12 px y una sombra tenue.
- Mantén entre 16 y 24 px de espacio interior según el ancho disponible.
- Organiza cada tarjeta con este orden visual cuando corresponda: título, información principal, detalle, total o estado y acciones.
- Destaca importes totales y estados mediante tipografía y etiquetas; no mediante bloques de color excesivos.
- Separa conceptos con espacio o divisores discretos y evita tablas anchas en celulares.

## Adaptación a celulares

- Diseña primero para un ancho mínimo de 320 px y evita siempre el desplazamiento horizontal.
- Usa una sola columna en pantallas estrechas. Permite varias columnas únicamente cuando el contenido conserve una lectura cómoda.
- Aplica márgenes laterales mínimos de 16 px en celulares y limita el ancho del contenido en pantallas grandes para evitar líneas demasiado extensas.
- Apila verticalmente los botones cuando no quepan con claridad en una misma fila; cada botón debe ocupar todo el ancho disponible en celulares.
- Permite que textos, precios y etiquetas se ajusten sin superponerse ni cortarse.
- Mantén controles táctiles separados por al menos 8 px.
- Evita alturas fijas en tarjetas, mensajes y contenedores de texto.
- Si existe una confirmación, debe caber en la pantalla, admitir desplazamiento vertical interno cuando sea necesario y conservar accesibles sus acciones.

## Consistencia entre pantallas

- Reutiliza siempre la misma paleta, tipografía, escala de espacios, radios, sombras y estilos de componentes.
- Mantén el encabezado, el ancho máximo del contenido y los márgenes principales en la misma posición relativa.
- Usa el mismo término para una acción o estado en toda la aplicación; no alternes sinónimos.
- Conserva el significado de cada color: verde para aprobación, rojo para rechazo, ámbar para pendiente y naranja para la acción principal de marca.
- Presenta mensajes de éxito, error y advertencia con la misma estructura visual e incluye texto descriptivo.
- No crees una variante visual nueva si un componente existente puede resolver el mismo propósito.

## Lista de verificación

Antes de dar por terminado un diseño:

1. Confirma que cumple la especificación funcional vigente y no añade funciones nuevas.
2. Verifica la vista desde 320 px y comprueba que no haya desplazamiento horizontal.
3. Comprueba contraste, foco visible, tamaño táctil y legibilidad.
4. Revisa que botones, tarjetas, estados y mensajes sigan esta guía.
5. Comprueba que toda la interfaz visible para el usuario esté en español.
