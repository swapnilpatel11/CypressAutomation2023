//!Cypress - Spec
/// <reference types='Cypress'/>
describe('My First Test Suite', () => {
    it('My First TestCase', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
    // ! when there is not loading in browser then we have to use wait mechanism
      cy.wait(2000)
      cy.get('.product').should('have.length',5)  //!without visible it will locate 5 elements
      cy.get('.product:visible').should('have.length',4) //!Used visible when there is invisible elements in Browser UI

      //! Alias for locator
      cy.get('.products').as('productlocator')
      //! Getting Product information without visible -- Parent child chaining -- Reducing scope to parent not global
      cy.get('@productlocator').find('.product').should('have.length',4)

      //!click on Add to Cart button on second product -- eq start from zero index
      cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click()

      //!Grabing text for Validation with text command -- Iterate in array for getting product with text name
      cy.get('@productlocator').find('.product').each(($el, index, $list) => {
        
       const textVeg = $el.find('h4.product-name').text()  //!text() is not cypress command its JQuery method
       if(textVeg.includes('Cashews')) {
        //!click method is depreceated for followed by find method so they introduced new 'wrap' method as $el is unpromised resolved
          cy.wrap($el).find('button').click()  
       }
      })

      cy.get('.brand').should('have.text','GREENKART')
      //!Using then for variable logoelement as first resolved and then applied text method to get text under then fuction
      //!when non cypress code will be used that time promise get confused so we cannot use directly store in variable and applied get text
      cy.get('.brand').then(function(logoelement){
          cy.log(logoelement.text())  //!printing output
      })
      
    })
  })