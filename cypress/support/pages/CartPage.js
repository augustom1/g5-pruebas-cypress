// Page Object: carrito (https://app.bookdb.online/shopping-cart)
class CartPage {
  selectors = {
    itemTitle: 'app-shoppingcart td.mat-column-title',
    checkoutButton: 'app-shoppingcart button', // se filtra por el texto 'CheckOut'
  };

  assertLoaded() {
    cy.url().should('include', '/shopping-cart');
  }

  assertBookInCart(title) {
    cy.get(this.selectors.itemTitle).should('contain.text', title);
  }

  checkout() {
    cy.contains(this.selectors.checkoutButton, 'CheckOut').click();
  }
}

export default new CartPage();
