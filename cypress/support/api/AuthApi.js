// "API Object": encapsula el endpoint de autenticación.
// Verificado en Swagger: POST /api/Login con body { username, password }.
// Respuesta 200: { token, userDetails: { userId, username, userTypeName } }
// Respuesta 401: usuario o contraseña incorrectos (body vacío).
class AuthApi {
  login(username, password) {
    return cy.request({
      method: 'POST',
      url: '/api/Login',
      body: { username, password },
      failOnStatusCode: false, // para poder verificar el 401 sin que Cypress corte el test
    });
  }
}

export default new AuthApi();
