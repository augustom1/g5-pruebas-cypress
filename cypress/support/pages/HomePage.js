// Page Object: home con la lista de libros y la barra superior
class HomePage {
  selectors = {
    bookCards: 'app-book-card',                 // cada tarjeta de libro
    bookTitle: '.card-title strong',            // título dentro de la tarjeta
    addToCartButton: 'app-addtocart button',    // botón 'Add to Cart' dentro de la tarjeta
    cartButton: 'mat-toolbar button:has(mat-icon:contains("shopping_cart"))',
    cartCount: 'mat-toolbar mat-icon:contains("shopping_cart") .mat-badge-content',
    toast: 'simple-snack-bar',                  // cartel de Angular Material (snackbar)
    userMenu: 'mat-toolbar a[aria-haspopup="menu"]', // botón con el nombre del usuario logueado
  };

  assertLoaded() {
    cy.url().should('not.include', '/login');
    cy.get(this.selectors.bookCards).should('have.length.greaterThan', 0);
  }

  assertCartCount(expected) {
    cy.get(this.selectors.cartCount).should('have.text', String(expected));
  }

  assertNoLoggedUser() {
    cy.get(this.selectors.userMenu).should('not.exist');
  }

  // Devuelve (yield) el título del primer libro de la lista
  getFirstBookTitle() {
    return cy.get(this.selectors.bookCards).first().find(this.selectors.bookTitle)
      .invoke('text').then((t) => t.trim());
  }

  addFirstBookToCart() {
    cy.get(this.selectors.bookCards).first().find(this.selectors.addToCartButton).click();
  }

  assertToast(message) {
    cy.get(this.selectors.toast).should('contain.text', message);
  }

  openCart() {
    cy.get(this.selectors.cartButton).click();
  }
}

export default new HomePage();
