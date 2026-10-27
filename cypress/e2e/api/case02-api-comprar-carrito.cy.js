import CheckoutApi from '../../support/api/CheckoutApi';

describe('Caso de prueba 2 (grupal)', () => {
  it('API | Comprar carrito exitosamente', () => {
    cy.fixture('user').then((user) => {
      cy.fixture('checkout-body').then((body) => {
        cy.apiLogin(user.username, user.password).then(({ token, userId }) => {
          CheckoutApi.checkout(userId, body, token).then((res) => {
            expect(res.status).to.eq(200);
          });
        });
      });
    });
  });
});
