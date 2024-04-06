import { qase } from "cypress-qase-reporter/dist/mocha"

describe('Checklist start', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  qase(1,
    it('starts with 3 items', () => {
      // cy.visit('/')
      cy.get('li').should('have.length', 3)
    })
  )

  qase(3,
    it('Has the right items by start', () => {
      let taskList = [' Go to potion lass', ' Buy new robes', ' Practice magic' ]
      taskList.forEach(el => {
        cy.contains(el).should('be.visible')
      })

    })
  )
  //Has the right items by start

})