import LoginPage from '../../support/pages/LoginPage';
import HomePage from '../../support/pages/HomePage';

describe('Caso de prueba 6', () => {
  it('Iniciar sesión con campos vacíos muestra mensajes de validación | Augusto Meyer', () => {
    cy.fixture('login-invalid').then((invalid) => {
      // Pasos 1 a 3: abrir /login, dejar Username y Password vacíos, clic en Login
      cy.login('', '');

      // Resultado: un mensaje debajo de cada campo, se queda en /login y no hay usuario logueado
      LoginPage.assertFieldError(invalid.usernameRequired);
      LoginPage.assertFieldError(invalid.passwordRequired);
      LoginPage.assertStillOnLoginPage();
      HomePage.assertNoLoggedUser();
    });
  });
});
