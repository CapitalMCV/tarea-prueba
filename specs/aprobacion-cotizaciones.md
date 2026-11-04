# Especificación 001: Aprobación y rechazo de cotizaciones adicionales

## 1. Definición del problema

Durante una reparación pueden aparecer trabajos adicionales que requieren autorización del cliente. El cliente necesita consultar claramente la cotización asociada a su vehículo y comunicar si la aprueba o la rechaza.

La decisión debe ser explícita, evitar acciones accidentales, permanecer disponible después de recargar la página y quedar registrada con fecha y hora. Una vez confirmada, la decisión será irreversible y la interfaz no permitirá decisiones duplicadas.

## 2. Diseño de la solución

La página mostrará una cotización adicional en español con:

- Identificación básica del vehículo.
- Descripción de cada reparación adicional.
- Precio de cada concepto y total de la cotización.
- Estado de la cotización: **Pendiente**, **Aprobada** o **Rechazada**.
- Acciones **Aprobar cotización** y **Rechazar cotización** cuando su estado sea pendiente.

Antes de registrar cualquiera de las decisiones, se mostrará una confirmación que indique claramente la acción seleccionada. Si el cliente cancela la confirmación, la cotización no se modificará. El rechazo no solicitará un motivo.

Cuando el cliente confirme una decisión, la aplicación:

- Actualizará el estado de la cotización.
- Registrará la fecha y hora de la decisión.
- Guardará localmente la decisión para conservarla al recargar la página en el mismo navegador y dispositivo.
- Mostrará un mensaje claro con el resultado.
- Ocultará o deshabilitará las acciones para impedir una nueva decisión.

La interfaz será adaptable a celulares. Esta especificación no incluye autenticación, edición de cotizaciones, anulación de decisiones, captura del motivo de rechazo ni persistencia en un servidor. Se asume que la aplicación ya recibió la cotización correspondiente al cliente.

## 3. Criterios de aceptación

1. **Visualización de una cotización pendiente**  
   Dada una cotización pendiente, cuando el cliente abra la página, verá la identificación del vehículo, los conceptos adicionales, sus precios, el total y las acciones para aprobar o rechazar.

2. **Aprobación explícita y persistente**  
   Dada una cotización pendiente, cuando el cliente seleccione **Aprobar cotización**, deberá confirmar la acción. Si confirma, el estado cambiará a **Aprobada**, se mostrará la fecha y hora de aprobación y el resultado se conservará al recargar la página; si cancela, no habrá cambios.

3. **Rechazo explícito y persistente**  
   Dada una cotización pendiente, cuando el cliente seleccione **Rechazar cotización**, deberá confirmar la acción sin solicitar un motivo. Si confirma, el estado cambiará a **Rechazada**, se mostrará la fecha y hora del rechazo y el resultado se conservará al recargar la página; si cancela, no habrá cambios.

4. **Decisión irreversible**  
   Dada una cotización aprobada o rechazada, cuando se muestre o se recargue la página, las acciones para aprobar y rechazar no estarán disponibles y no será posible cambiar la decisión desde la interfaz.

5. **Uso desde celulares**  
   Dada una pantalla de 320 píxeles de ancho o más, toda la información y las acciones serán legibles y utilizables sin desplazamiento horizontal.
