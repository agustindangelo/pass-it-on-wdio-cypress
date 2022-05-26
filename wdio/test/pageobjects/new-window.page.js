const Page = require('./page');

class NewWindowPage extends Page {
  get newWindowLink() {
    return $('.example a');
  }

  async clickNewWindowLink() {
    await this.newWindowLink.click();
  }

  open() {
    return super.open('/windows');
  }
}

module.exports = new NewWindowPage();