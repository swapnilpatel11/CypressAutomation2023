//!Cypress - Spec
/// <reference types='Cypress'/>
describe('My Second Test Suite', () => {
    it('My Second TestCase', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
    // ! when there is not loading in browser then we have to use wait mechanism
      cy.wait(2000)
     
      //! Alias for locator
      cy.get('.products').as('productlocator')   
     
      //!Grabing text for Validation with text command -- Iterate in array for getting product with text name
      cy.get('@productlocator').find('.product').each(($el, index, $list) => {
        
       const textVeg = $el.find('h4.product-name').text()  //!text() is not cypress command its JQuery method
       if(textVeg.includes('Cashews')) {
        //!click method is depreceated for followed by find method so they introduced new 'wrap' method as $el is unpromised resolved
          cy.wrap($el).find('button').click()  
       }
      })

      cy.get('.cart-icon > img').click()

      cy.contains('PROCEED TO CHECKOUT').click()   //for button text wwe can write with contains to click on it

      cy.contains('Place Order').click()
      
    })
  })