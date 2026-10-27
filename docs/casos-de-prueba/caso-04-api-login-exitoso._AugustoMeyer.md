# Caso de prueba 4

**Título**: API | Iniciar sesión exitosamente | Augusto Meyer

**Descripción**: El objetivo de este test es verificar que un usuario registrado pueda iniciar sesión por API y que la respuesta incluya un token válido y los datos del usuario.

**Precondiciones**:
- Usuario registrado en https://app.bookdb.online (username y password válidos).

**Método**: POST

**URL**: https://app.bookdb.online/api/Login

**Body**:
```json
{
  "username": "<usuario registrado>",
  "password": "<contraseña correcta>"
}
```

| Pasos | Resultado esperado |
|---|---|
| 1. Enviar el pedido POST a `/api/Login` con el usuario y la contraseña correctos | El endpoint responde **200** |
| 2. Revisar el body de la respuesta | Contiene `token` (texto no vacío), `userDetails.username` igual al usuario enviado y `userDetails.userId` numérico |

**Respuesta del endpoint**: 200

**Automatización**: `cypress/e2e/api/case04-api-login-exitoso.cy.js`
