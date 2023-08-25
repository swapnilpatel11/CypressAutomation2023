///<reference types='Cypress'/>
///<reference types='cypress-iframe'/>
import 'cypress-iframe'
describe('Frames Test', ()=>{
    it('Demo Example',()=> {
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')     
       //!FremeLoaded method for move to iframe
       cy.frameLoaded('#courses-iframe')
        cy.wait(8000)
       //! Providing index for cssSelector via eq method as there are two elements we need to trigger on 0 index
       cy.iframe().find('a[href="mentorship"]').eq(0).click()
       
       cy.iframe().find('h1[class="pricing-title"]').should('have.length',2)
    })
} )