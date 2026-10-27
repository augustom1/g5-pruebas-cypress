import CheckoutApi from '../../support/api/CheckoutApi';

describe('Caso de prueba 3 (grupal)', () => {
  it('API | Error al comprar carrito sin token', () => {
    cy.fixture('user').then((user) => {
      cy.fixture('checkout-body').then((body) => {
        // Se obtiene un userId válido, pero NO se envía el token en el checkout
        cy.apiLogin(user.username, user.password).then(({ userId }) => {
          CheckoutApi.checkout(userId, body).then((res) => {
            expect(res.status).to.eq(401);
          });
        });
      });
    });
  });
});
