# Caso de prueba 5

**Título**: API | Error al iniciar sesión con contraseña incorrecta | Augusto Meyer

**Descripción**: El objetivo de este test es verificar que el endpoint de login rechace un pedido con un usuario existente y una contraseña incorrecta, sin devolver token.

**Precondiciones**:
- Usuario registrado en https://app.bookdb.online (username válido).

**Método**: POST

**URL**: https://app.bookdb.online/api/Login

**Body**:
```json
{
  "username": "<usuario registrado>",
  "password": "ClaveIncorrecta123"
}
```

| Pasos | Resultado esperado |
|---|---|
| 1. Enviar el pedido POST a `/api/Login` con el usuario correcto y una contraseña incorrecta | El endpoint responde **401 Unauthorized** |
| 2. Revisar el body de la respuesta | Viene vacío: no se devuelve ningún token |

**Respuesta del endpoint**: 401

**Automatización**: `cypress/e2e/api/case05-api-login-password-incorrecta.cy.js`
