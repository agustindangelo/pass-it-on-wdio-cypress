const DragAndDrop = require('../support/pageobjects/drag-and-drop.page')

describe('drag and drop test', () => {
  it('should drag the first item and drop it to the second position', async () => {
    // this file path should be relative to the root of the project, not to the current file

    DragAndDrop.open();
    DragAndDrop.dragAndDropItem('first')
    DragAndDrop.firstItem.should('includes', 'B')
    DragAndDrop.secondItem.should('includes', 'A')
  });
});