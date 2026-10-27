// Page Object: formulario de compra (https://app.bookdb.online/checkout)
// Campos: name, address line 1, address line 2, pincode, state
class CheckoutPage {
  selectors = {
    name: 'input[formcontrolname="name"]',
    address1: 'input[formcontrolname="addressLine1"]',
    address2: 'input[formcontrolname="addressLine2"]',
    pincode: 'input[formcontrolname="pincode"]',
    state: 'input[formcontrolname="state"]',
    placeOrder: 'app-checkout button[type="submit"]',
    orderSummary: 'app-checkout table.table tbody', // tabla 'Order Summary' de la derecha
  };

  assertLoaded() {
    cy.url().should('include', '/checkout');
  }

  assertFormVisible() {
    cy.get(this.selectors.name).should('be.visible');
    cy.get(this.selectors.address1).should('be.visible');
    cy.get(this.selectors.address2).should('be.visible');
    cy.get(this.selectors.pincode).should('be.visible');
    cy.get(this.selectors.state).should('be.visible');
  }

  assertOrderSummary(title) {
    cy.get(this.selectors.orderSummary).should('contain.text', title);
  }

  fillForm({ name, address1, address2, pincode, state }) {
    cy.get(this.selectors.name).type(name);
    cy.get(this.selectors.address1).type(address1);
    cy.get(this.selectors.address2).type(address2);
    cy.get(this.selectors.pincode).type(pincode);
    cy.get(this.selectors.state).type(state);
  }

  placeOrder() {
    cy.get(this.selectors.placeOrder).click();
  }
}

export default new CheckoutPage();
