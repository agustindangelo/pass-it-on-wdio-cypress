const DynamicallyRenderedPage = require('../pageobjects/dynamically-rendered.page')
const DynamicLoadPage = require('../pageobjects/dynamic-load.page')

describe('Wait tests', () => {
  it('should wait for the existing text to appear', async () => {
    await DynamicLoadPage.open();
    await DynamicLoadPage.clickStartBtn();

    await expect(DynamicLoadPage.finishText).toBeExisting();
    await expect(DynamicLoadPage.finishText).toHaveTextContaining('Hello World!');
  });

  it('should wait for the text to render', async () => {
    await DynamicallyRenderedPage.open();
    await DynamicallyRenderedPage.clickStartBtn();
    
    await expect(DynamicallyRenderedPage.finishText).toBeExisting();
    await expect(DynamicallyRenderedPage.finishText).toHaveTextContaining('Hello World!');
  });
});