///<reference types="cypress" />
const Page = require('./page');

class Iframe extends Page {
  get iframe() {
    return cy.get('#mce_0_ifr');
  }

  getIframeTextEditor(defaultText){
    return this.iframe.its('0.contentDocument').its('body').then(cy.wrap).contains(defaultText)
  }

  open() {
    return super.open('iframe');
  }
}

module.exports = new Iframe();