import { qase } from "cypress-qase-reporter/dist/mocha"

describe('Checklist start', () => {
  qase(1,
    it('starts with 3 items', () => {
      cy.visit('/')
      cy.get('li').should('have.length', 3)
    })
  )
})