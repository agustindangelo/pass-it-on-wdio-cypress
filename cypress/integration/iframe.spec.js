const Iframe = require('../support/pageobjects/iframe.page')

describe('interactic with iframes', () => {
  it('should drag the first item and drop it to the second position', async () => {
    Iframe.open();
    Iframe.getIframeTextEditor('Your content goes here.').should('be.visible')

  });
});