///<reference types="cypress" />
import {randomEmail} from '../support/util'
describe('should find an element which is not in the viewport', () => {
  it('should subscribe to the newsletter', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.viewport(400, 670);

    cy.get('#newsletter-input').type(randomEmail());
    cy.get('button[name="submitNewsletter"]').click();

    cy.get('.alert-success').should('be.visible').and('contain.text','You have successfully subscribed to this newsletter')
  })
});