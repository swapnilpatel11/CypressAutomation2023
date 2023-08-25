//!Cypress - Spec
/// <reference types='Cypress'/>
describe('My Fifth Test Suite', () => {
    it('My Fifth TestCase', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      
      //! new tab handling -- removing attribute target - to open new tab link in same page 
      cy.get('#opentab').invoke('removeAttr','target').click()

      //! Change url with origin function
      cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('li[class="nav-item"] [href="about.html"]').click()
        cy.get('.mt-50 h2').should('contain','QAClick Academy')

        
      })
      //!Need to write in another test case
      //! child window handling -- removing onclick attribute to open link in same page   
      // cy.get('#openwindow').invoke('removeAttr','target').click()

      // cy.origin('https://www.qaclickacademy.com/',()=>{
      //   cy.get('a[href="https://www.qaclickacademy.com/blog"]').click()
      //   cy.get('div[class="page-banner-cont"] h2').should('contain','Contact')     
      // })

      
  
    })
  })