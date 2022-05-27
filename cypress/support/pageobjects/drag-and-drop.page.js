///<reference types="cypress"/>
const Page = require('./page');

class DragAndDrop extends Page {

  open () {
    return super.open('drag_and_drop')
  }

  get firstItem()  {
    return cy.get('#column-a')
  }
  
  get secondItem()  {
    return cy.get('#column-b')
  }

  dragAndDropItem(item){
    const dataTransfer = new DataTransfer(); //necessary to trigger an event
    if (item==='first'){
        this.firstItem.trigger('dragstart', {
            dataTransfer
          }); //an event must be trigger
          this.secondItem.trigger('drop', {
              dataTransfer
            });
    } else {
        this.secondItem.trigger('dragstart', {
            dataTransfer
          }); //an event must be trigger
          this.firstItem.trigger('drop', {
              dataTransfer
            });
    }
  }
  
}

module.exports = new DragAndDrop();