// Page Object: pantalla de órdenes (https://app.bookdb.online/myorders)
// La tabla lista las órdenes de la más vieja a la más nueva (verificado).
// Al hacer clic en una fila se despliega la fila de detalle que está justo debajo.
class OrdersPage {
  selectors = {
    orderRows: 'tr.example-element-row',
    expandedRow: 'tr.example-expanded-row',
    detailRow: 'tr.example-detail-row',
  };

  assertLoaded() {
    cy.url().should('include', '/myorders');
    cy.get(this.selectors.orderRows).should('have.length.greaterThan', 0);
  }

  openFirstOrder() {
    cy.get(this.selectors.orderRows).first().click();
  }

  assertOrderContains(title) {
    cy.get(this.selectors.expandedRow).next(this.selectors.detailRow)
      .should('be.visible')
      .and('contain.text', title);
  }
}

export default new OrdersPage();
