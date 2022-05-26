const Page = require('./page');

class UploadFilePage extends Page {
  get chooseFileBtn() {
    return $('#file-upload')
  }

  get fileSubmitBtn() {
    return $('#file-submit')
  }

  get uploadedFiles() {
    return $('#uploaded-files')
  }

  get fileUploadedMsg() {
    return $('.example h3')
  }

  async sendFile(filePath) {
    const remoteFilePath = await browser.uploadFile(filePath)
    await this.chooseFileBtn.setValue(remoteFilePath)
    await this.fileSubmitBtn.click()
  }

  open() {
    return super.open('/upload')
  }
}

module.exports = new UploadFilePage();