//!Cypress - Spec
/// <reference types='Cypress'/>
describe('My Sixth Test Suite', () => {
    it('My Sixth TestCase', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      
    cy.get('div.mouse-hover-content').invoke('show')

    //!force click invisible elements
    //cy.contains('Top').click({force:true})
    cy.contains('Top').click()
    cy.url().should('include','top')
})
})