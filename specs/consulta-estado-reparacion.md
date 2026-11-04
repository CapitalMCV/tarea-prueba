# Especificación 002: Consulta del estado de la reparación

## Problema y objetivo
Los clientes llaman para saber cómo va su vehículo. Esta característica les permitirá consultar un estado breve desde la página, usando su celular.

## Funcionalidad
Agregar una sección «Estado de la reparación» para el vehículo de ejemplo. Mostrará el vehículo y su placa, un estado actual, una explicación breve y la fecha y hora de la última actualización cuando estén disponibles.

Los estados posibles son: **Recibido**, **En revisión**, **Esperando autorización** y **En reparación**.

En esta versión, el estado será un dato de ejemplo definido en el proyecto. No habrá edición por mecánicos ni sincronización entre dispositivos; la página no debe presentarlo como información en tiempo real.

## Criterios de aceptación
1. Al abrir la página, el cliente identifica el vehículo y entiende su estado sin pulsar botones.
2. Si el estado es «Esperando autorización», el texto indica que hay una cotización pendiente; no dice que la reparación adicional ya fue aprobada.
3. Si no se conoce la fecha de actualización, aparece «Actualización no disponible».
4. La sección se puede leer en una pantalla de 320 píxeles sin desplazamiento horizontal.
5. Consultar el estado no modifica la decisión guardada sobre la cotización.

## Métricas de éxito
Probar la página con 5 personas que no la hayan visto y registrar los resultados:

- Al menos 4 de 5 identifican correctamente el estado y explican qué significa sin ayuda.
- Al menos 4 de 5 encuentran el estado en menos de 30 segundos desde un celular.
- Las 5 distinguen si hay una fecha de actualización o si no está disponible.
- En dos pruebas manuales, una aprobando y otra rechazando, consultar el estado no altera la decisión guardada al recargar.