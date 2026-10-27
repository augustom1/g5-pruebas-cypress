import LoginPage from './pages/LoginPage';
import AuthApi from './api/AuthApi';
import CartApi from './api/CartApi';

// Comando 1: login por la interfaz (pantalla /login)
Cypress.Commands.add('login', (username, password) => {
  LoginPage.visit();
  LoginPage.fillUsername(username);
  LoginPage.fillPassword(password);
  LoginPage.submit();
});

// Comando 2: pedido de login por API. Devuelve la respuesta completa (status + body),
// sin verificar nada, para que el test decida qué esperar (200 o 401).
Cypress.Commands.add('loginRequest', (username, password) => {
  return AuthApi.login(username, password);
});

// Comando 3: login por API para usar como paso previo. Verifica que salió bien
// y devuelve { token, userId } para los pedidos que necesitan autenticación.
Cypress.Commands.add('apiLogin', (username, password) => {
  return cy.loginRequest(username, password).then((res) => {
    expect(res.status, 'status del login').to.eq(200);
    const token = res.body.token;
    const userId = res.body.userDetails.userId;
    return { token, userId };
  });
});

// Comando 4: deja el carrito del usuario vacío (precondición de los casos de carrito).
Cypress.Commands.add('resetCart', (username, password) => {
  cy.apiLogin(username, password).then(({ userId }) => {
    CartApi.clear(userId).its('status').should('eq', 200);
  });
});
