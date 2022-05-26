///<reference types="cypress"/>
const DynamicallyRenderedPage = require('../support/pageobjects/dynamically-rendered.page')
const DynamicLoadPage = require('../support/pageobjects/dynamic-load.page')

describe('Wait tests', () => {
  it('should wait for the existing text to appear', () => {
    DynamicLoadPage.open();
    DynamicLoadPage.clickStartBtn();

    DynamicLoadPage.finishText.should('be.visible')
    DynamicLoadPage.finishText.should('contain.text', 'Hello World!')
  });

  it('should wait for the text to render', () => {
    DynamicallyRenderedPage.open();
    DynamicallyRenderedPage.clickStartBtn();

    DynamicallyRenderedPage.finishText.should('be.visible')
    DynamicallyRenderedPage.finishText.should('contain.text', 'Hello World!')
  });
});