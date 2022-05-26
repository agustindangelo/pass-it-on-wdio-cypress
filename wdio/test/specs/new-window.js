const NewWindowPage = require('../pageobjects/new-window.page');

describe('Tabs handling', () => {
  it('should open a new window', async () => {
    await NewWindowPage.open();
    await NewWindowPage.clickNewWindowLink();
    await browser.switchWindow('/windows/new');

    await expect(browser).toHaveTitle('New Window');
  });

  it('should close the new tab and switch back to old tab', async () => {
    browser.closeWindow();
    browser.switchWindow('/windows');

    await expect(browser).toHaveTitle('The Internet');
  });
})