# Caso de prueba 6

**Título**: Iniciar sesión con campos vacíos muestra mensajes de validación | Augusto Meyer

**Descripción**: El objetivo de este test es verificar que, al intentar iniciar sesión desde la pantalla de login sin completar los campos, la aplicación muestre un mensaje de validación en cada campo obligatorio y no permita el ingreso.

**Precondiciones**:
- No haber iniciado sesión.

| Pasos | Resultado esperado |
|---|---|
| 1. Ingresar a https://app.bookdb.online/login | Se muestra el formulario de login con los campos Username y Password y el botón Login |
| 2. Dejar los campos Username y Password vacíos | Los campos quedan vacíos |
| 3. Hacer clic en el botón Login del formulario | Debajo de Username se muestra "Username is required" y debajo de Password "Password is required"; la página sigue en /login y en la barra superior no aparece ningún usuario logueado |

**Automatización**: `cypress/e2e/ui/case06-login-campos-vacios.cy.js`

## Hallazgo durante la prueba manual (por qué no se eligió "contraseña incorrecta")

Al principio el caso 6 iba a ser "Iniciar sesión con contraseña incorrecta muestra mensaje de error". Al probarlo se vio que:

- En **Chrome y Edge**, la API responde **401** pero la pantalla **no muestra ningún mensaje**: el usuario no se entera de por qué no pudo entrar.
- En **Electron** (el navegador que trae Cypress) sí aparece "Login Failed. Username or Password is incorrect.".

**Causa probable**: según el código fuente público de la app (`login.component.ts` y `error-interceptor.service.ts`), el mensaje solo se muestra si el texto del error contiene la palabra "Unauthorized". Ese texto sale de la frase de estado HTTP (`401 Unauthorized`). Con HTTP/2, que es lo que usa Chrome con este servidor, la frase de estado no se envía, y por eso el mensaje no aparece. (La primera parte está confirmada en el código; lo de HTTP/2 es la explicación que cierra con lo que se observó.)

Es un **defecto de la aplicación**, no del test. El caso se reemplazó por uno que da el mismo resultado en cualquier navegador. El error de contraseña incorrecta igual queda cubierto por la API en el caso 5 (responde 401).
