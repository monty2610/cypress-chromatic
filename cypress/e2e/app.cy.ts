describe('productList spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.scrollTo('bottom');

    cy.matchImageSnapshot();
  })
})