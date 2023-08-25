//!Cypress - Spec
/// <reference types='Cypress'/>
describe('My Fourth Test Suite', () => {
    it('My Fourth TestCase', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
      //!Alert Button
      cy.get('#alertbtn').click()
      cy.get('#confirmbtn').click()

      //! window:alert
      cy.on('window.alert',(str)=> 
      {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      //! window:confirm
      cy.on('window.confrim',(str)=> 
      {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })
      
    })
  })