///<reference types="cypress"/>
const Page = require('./page');

class DynamicallyRenderedPage extends Page {
  get startButton()  {
    return cy.get('#start > button')
  }
  
  get finishText() {
    return cy.get('#finish h4', {timeout: 5000})
  }

  clickStartBtn() {
    this.startButton.click();
  }

  open () {
    return super.open('/dynamic_loading/2')
  }
}

module.exports = new DynamicallyRenderedPage();