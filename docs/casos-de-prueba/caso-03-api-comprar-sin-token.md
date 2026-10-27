# Caso de prueba 3

> Caso dado por la profesora. Texto original, sin modificaciones.

**Título**: API | Error al comprar carrito sin token

**Descripción**: El objetivo de este test es verificar que el endpoint de compra del carrito valide correctamente la autenticación del usuario y devuelva un error cuando no se proporciona el token JWT Bearer.

**Precondiciones**:

- Tener un UserId de un usuario registrado

| Pasos | Resultado esperado |
|---|---|
| Realizar una solicitud sin enviar token: | Respuesta del Endpoint:<br>Error 401 unauthorized |

- Método: POST
- URL: https://app.bookdb.online/api/CheckOut/{userId}
- Body:

```json
{
"orderDetails": [
{
"book": {
"bookId": 2,
"title": "Harry Potter and the Chamber of Secrets",
"author": "JKR",
"category": "Mystery",
"price": 236,
"coverFileName": "9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg"
},
"quantity": 1
}
],
"cartTotal": 236
}
```

**Automatización**: `cypress/e2e/api/case03-api-comprar-sin-token.cy.js`
