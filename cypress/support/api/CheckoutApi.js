// "API Object": encapsula el endpoint POST /api/CheckOut/{userId}
class CheckoutApi {
  /**
   * @param {number|string} userId
   * @param {object} body  body del pedido (orderDetails + cartTotal)
   * @param {string} [token]  JWT Bearer; si se omite, no se envía Authorization
   */
  checkout(userId, body, token) {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return cy.request({
      method: 'POST',
      url: `/api/CheckOut/${userId}`,
      body,
      headers,
      failOnStatusCode: false, // para poder verificar códigos de error (401, etc.)
    });
  }
}

export default new CheckoutApi();
