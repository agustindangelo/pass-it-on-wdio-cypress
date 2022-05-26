const Page = require('./page');

class DynamicallyRenderedPage extends Page {
  get startButton()  {
    return $('#start button')
  }
  
  get finishText() {
    return $('#finish h4')
  }

  async clickStartBtn() {
    await this.startButton.click();
  }

  open () {
    return super.open('/dynamic_loading/2')
  }
}

module.exports = new DynamicallyRenderedPage();