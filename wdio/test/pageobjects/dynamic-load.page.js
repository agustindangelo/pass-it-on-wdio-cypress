const Page = require('./page');

class DynamicLoadPage extends Page {
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
    return super.open('/dynamic_loading/1')
  }
}

module.exports = new DynamicLoadPage();