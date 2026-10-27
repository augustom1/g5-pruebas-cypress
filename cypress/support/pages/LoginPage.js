// Page Object: pantalla de login (https://app.bookdb.online/login)
// Selectores verificados en el HTML real. Se usa formcontrolname en vez de #mat-input-0
// porque los ids de Angular Material se numeran solos y pueden cambiar.
class LoginPage {
  selectors = {
    username: 'input[formcontrolname="username"]',
    password: 'input[formcontrolname="password"]',
    submit: 'app-login mat-card-actions button', // el Login del formulario, no el de la barra
    fieldErrors: 'app-login mat-form-field mat-error', // validaciones debajo de cada campo
  };

  visit() {
    cy.visit('/login');
  }

  // Si el valor viene vacío ('') el campo solo se limpia: Cypress no permite type('')
  fillUsername(value) {
    cy.get(this.selectors.username).clear();
    if (value) cy.get(this.selectors.username).type(value);
  }

  fillPassword(value) {
    cy.get(this.selectors.password).clear();
    if (value) cy.get(this.selectors.password).type(value, { log: false }); // no mostrar la clave en el log
  }

  submit() {
    cy.get(this.selectors.submit).click();
  }

  assertFieldError(message) {
    cy.contains(this.selectors.fieldErrors, message).should('be.visible');
  }

  assertStillOnLoginPage() {
    cy.url().should('include', '/login');
    cy.get(this.selectors.submit).should('be.visible');
  }
}

export default new LoginPage();
