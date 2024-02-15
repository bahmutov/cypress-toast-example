/// <reference types="cypress" />

describe('Toast', () => {
  it(
    'shows the expected message',
    { scrollBehavior: 'nearest' },
    () => {
      cy.visit('/toast').wait(1000)
      cy.contains('basic-doc button', 'Show').click()
      cy.contains('p-toastitem', 'Message Content')
        .should('be.visible')
        .find('.p-toast-message-success')
      cy.get('p-toastitem').should('not.exist')
    },
  )
})
