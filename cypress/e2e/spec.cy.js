/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-time-marks
import 'cypress-time-marks'

describe('Toast', () => {
  it(
    'shows the expected message for 2 seconds',
    { scrollBehavior: 'nearest' },
    () => {
      cy.visit('/toast').wait(1000)
      cy.contains('basic-doc button', 'Show').click()
      cy.contains('p-toastitem', 'Message Content')
        .should('be.visible')
        .find('.p-toast-message-success')
      cy.get('p-toastitem').should('not.exist')
      cy.log('**confirm timing**')
    },
  )
})
