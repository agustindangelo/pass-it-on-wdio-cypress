///<reference types="cypress" />
describe('Slider', () => {
  it('should add 3 units to the slider value', () => {
    cy.visit('https://the-internet.herokuapp.com/horizontal_slider')

    cy.get('input[type="range"]').invoke('val').then(previousValue => {

      cy.log('Initial value: ' + previousValue)

      cy.get('input[type="range"]').invoke('attr', 'step').then(step =>{

        cy.log('Step value: ' + step)
        let newValue = (parseFloat(previousValue) + parseFloat(step) * 3).toString()

        cy.get('input[type="range"]').invoke('val', newValue).trigger('change')
        cy.get('input[type="range"]').invoke('val').should('eq', newValue)
        
        cy.log('New value: ' + newValue)
  
      })
    })
  });
});