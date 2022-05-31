const UploadFilePage = require('../pageobjects/upload-file.page')
// const DownloadFilePage = require('../pageobjects/download-file.page')

describe('files handling tests', () => {
  it('should upload a file', async () => {
    const filePath = '../../wdio/test/resources/essential-chords.pdf'
    // this file path should be relative to the root of the project, not to the current file

    await UploadFilePage.open();
    await UploadFilePage.sendFile(filePath);

    expect(UploadFilePage.fileUploadedMsg).toHaveText('File Uploaded!')
    expect(UploadFilePage.uploadedFiles).toHaveTextContaining('essential-chords.pdf')
  });
});