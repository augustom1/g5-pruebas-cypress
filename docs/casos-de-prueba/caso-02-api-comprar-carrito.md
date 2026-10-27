# Caso de prueba 2

> Caso dado por la profesora. Texto original, sin modificaciones.

**Título**: API | Comprar carrito exitosamente

**Descripción**: El objetivo de este test es verificar que se pueda realizar una compra del carrito exitosamente por API.

**Precondiciones**:

- Tener un UserId de un usuario registrado

| Pasos | Resultado esperado |
|---|---|
| Realizar una solicitud: | Respuesta del Endpoint:<br>200 |

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

**Automatización**: `cypress/e2e/api/case02-api-comprar-carrito.cy.js`
