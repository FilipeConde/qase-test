import { qase } from 'cypress-qase-reporter/dist/mocha'

describe('delete', () => {
  qase(4,
    it('Delete the first item', () => {
      cy.visit('/')
      cy.contains(' Go to potion class').within(() => {
        cy.get('.fa-trash').click()
      })
      cy.get('li').should('have.length', 2)
    })
  )
})