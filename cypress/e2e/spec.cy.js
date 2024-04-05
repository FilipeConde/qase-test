describe('Checklist start', () => {
  it('starts with 3 items', () => {
    cy.visit('/')
    cy.get('li').should('have.length', 3)
  })
})