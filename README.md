# Formulario Interactivo - Hospital Español de Colón

Este proyecto incluye un formulario en HTML y un script en JavaScript para recopilar datos del usuario. A continuación, se describen las principales características y el funcionamiento del proyecto.

## Funcionalidad

- Solicita datos al usuario mediante prompts:
  - Nombre completo
  - Correo electrónico
  - Número de teléfono
- Valida los datos ingresados utilizando operadores como `===` y `includes`.
- Proporciona retroalimentación mediante `alert` y `console.log`.
- Impide el envío del formulario si los datos no son válidos.

## Estructura del Código

### Variables

- `let`: Utilizado para variables de ámbito local dentro de funciones.
- `const`: Utilizado para valores que no cambiarán (por ejemplo, referencias a elementos del DOM).

### Cambios en el HTML

- Se agregó un `id="contact-form"` al formulario para identificarlo.
- Se incluyó el script `form-handler.js` al final del cuerpo del HTML:
  ```html
  <script src="form-handler.js" type="module"></script>
