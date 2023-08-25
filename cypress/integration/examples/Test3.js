//!Cypress - Spec
/// <reference types='Cypress'/>
describe('My Third Test Suite', () => {
    it('My Third TestCase', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //!checkbox assertion check() method and 'have.attribute' for assertion to compare with attribute value
      //multiple assertion in single line with .and()
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

      //!to uncheck checkbox uncheck() method for assertion not.be.checked
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      //!select multiple options in checkboxes with check([value attribute])
      cy.get('input[type="checkbox"]').check(['option2','option3'])

      //!Static dropdown -- based on DOM value attribute and Assertion on that
      cy.get('select').select('option2').should('have.value','option2')

      //!Dynamic Dropdown -- Autosuggest options need to be collect and run in each method for iterate 
      cy.get('#autocomplete').type('ind')
      // find common element to iterate through list
      cy.get('.ui-menu-item div').each(($el,index,$list)=> {
        if($el.text()==='India'){
          cy.wrap($el).click()
        }
      })
      //!Assertion for india 
      cy.get('#autocomplete').should('have.value','India')

      //!visible and invisible element with assertions
      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')

      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')


      //Radio button
      cy.get('input[value="radio1"]').check().should('be.checked')

      
    })
  })