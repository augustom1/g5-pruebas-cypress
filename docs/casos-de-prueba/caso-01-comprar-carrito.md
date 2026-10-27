# Caso de prueba 1

> Caso dado por la profesora. Texto original, sin modificaciones.

**Título**: Comprar carrito exitosamente y visualizar orden de compra

**Descripción**: El objetivo de este test es verificar que se pueda comprar un libro y visualizar la orden

**Precondiciones**:

- Tener un usuario registrado que no posea libros en el carrito

| Pasos | Resultado esperado |
|---|---|
| Iniciar sesión en la web https://app.bookdb.online/login | Se redirige al home de la web<br>Se visualiza la lista de libros<br>Se visualiza el icono del carrito con un 0 |
| Click en 'Add to cart' sobre el primer libro de la lista | Se visualiza toast 'One Item added to cart'<br>Se visualiza el icono del carrito con un 1 |
| Click en el icono del carrito | Se visualiza el título del libro correctamente |
| Click en checkout | Se redirige al formulario de compra<br>Se visualiza la orden correctamente<br>Se visualiza el formulario con los campos (name, address 1, address 2, pincode, state) |
| Completar el formulario | |
| Click en Place Order | Se crea la orden de compra correctamente<br>Se redirige a la pantalla de ordenes de compra |
| Click en la primer orden de compra | Se visualiza la compra correctamente |

**Automatización**: `cypress/e2e/ui/case01-comprar-carrito.cy.js`
