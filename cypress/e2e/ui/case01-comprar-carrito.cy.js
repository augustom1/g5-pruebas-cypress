import HomePage from '../../support/pages/HomePage';
import CartPage from '../../support/pages/CartPage';
import CheckoutPage from '../../support/pages/CheckoutPage';
import OrdersPage from '../../support/pages/OrdersPage';

describe('Caso de prueba 1 (grupal)', () => {
  beforeEach(() => {
    // Precondición: usuario registrado sin libros en el carrito
    cy.fixture('user').then((user) => {
      cy.resetCart(user.username, user.password);
    });
  });

  it('Comprar carrito exitosamente y visualizar orden de compra', () => {
    cy.fixture('user').then((user) => {
      cy.fixture('shipping').then((shipping) => {
        // Paso 1: iniciar sesión
        cy.login(user.username, user.password);
        HomePage.assertLoaded();
        HomePage.assertCartCount(0);

        // Paso 2: agregar el primer libro al carrito
        HomePage.getFirstBookTitle().then((bookTitle) => {
          HomePage.addFirstBookToCart();
          HomePage.assertToast('One Item added to cart');
          HomePage.assertCartCount(1);

          // Paso 3: abrir el carrito
          HomePage.openCart();
          CartPage.assertLoaded();
          CartPage.assertBookInCart(bookTitle);

          // Paso 4: checkout
          CartPage.checkout();
          CheckoutPage.assertLoaded();
          CheckoutPage.assertOrderSummary(bookTitle);
          CheckoutPage.assertFormVisible();

          // Pasos 5 y 6: completar formulario y Place Order
          CheckoutPage.fillForm(shipping);
          CheckoutPage.placeOrder();
          OrdersPage.assertLoaded();

          // Paso 7: abrir la primera orden
          OrdersPage.openFirstOrder();
          OrdersPage.assertOrderContains(bookTitle);
        });
      });
    });
  });
});
