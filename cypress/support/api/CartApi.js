// "API Object": encapsula el carrito de compras.
// Verificado en Swagger: DELETE /api/ShoppingCart/{userId} vacía el carrito (no pide token).
class CartApi {
  clear(userId) {
    return cy.request({
      method: 'DELETE',
      url: `/api/ShoppingCart/${userId}`,
      failOnStatusCode: false,
    });
  }
}

export default new CartApi();
