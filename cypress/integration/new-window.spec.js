///<reference types="cypress" />
const NewWindowPage = require('../support/pageobjects/new-window.page');

describe('Tabs handling', () => {
  it('should open a new window and then go back to the previous windoe', () => {
    cy.visit('https://the-internet.herokuapp.com/windows')
    NewWindowPage.clickNewWindowLink()

    cy.url().should('include', '/windows/new')
    cy.get('h3').should('have.text', 'New Window')

    NewWindowPage.goBack()
    cy.url().should('not.include', 'new').and('include','/windows')
    cy.log("Cypress doesn't support navigating in different tabs!")
  });

})