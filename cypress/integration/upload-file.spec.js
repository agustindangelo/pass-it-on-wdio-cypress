const UploadFilePage = require('../support/pageobjects/upload-file.page')
const filePath = './wdio/test/resources/essential-chords.pdf'

describe('files handling tests', () => {
  it('should upload a file', async () => {
    // this file path should be relative to the root of the project, not to the current file

    UploadFilePage.open();
    UploadFilePage.sendFile(filePath);

    UploadFilePage.fileUploadedMsg.should('have.text','File Uploaded!')
    UploadFilePage.uploadedFiles.should('contain.text','essential-chords.pdf')
  });
});