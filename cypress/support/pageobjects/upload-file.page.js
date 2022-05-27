///<reference types="cypress"/>

const Page = require('./page');
import 'cypress-file-upload';

class UploadFilePage extends Page {
  get chooseFileBtn() {
    return cy.get('#file-upload')
  }

  get fileSubmitBtn() {
    return cy.get('#file-submit')
  }

  get uploadedFiles() {
    return cy.get('#uploaded-files')
  }

  get fileUploadedMsg() {
    return cy.get('.example h3')
  }

  sendFile(filePath) {
    this.chooseFileBtn.selectFile(filePath)
    this.fileSubmitBtn.click()
  }

  open() {
    return super.open('upload')
  }
}

module.exports = new UploadFilePage();