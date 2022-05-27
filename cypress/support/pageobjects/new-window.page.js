///<reference types="cypress" />
const Page = require('./page');

class NewWindowPage extends Page {
  get newWindowLink() {
    return cy.get('.example a');
  }

  async clickNewWindowLink() {
    this.newWindowLink.invoke('removeAttr', 'target').click();
  }

  open() {
    return super.open('windows');
  }

  goBack(){
    cy.go('back')
  }
}

module.exports = new NewWindowPage();