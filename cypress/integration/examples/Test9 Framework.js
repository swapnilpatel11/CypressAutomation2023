///<reference types='Cypress'/>

describe('Framework Test', ()=>{

    //! all precondition setup should be done in before hook
    before(() => {
        //! setting up data retrieval from example.json fixture
        cy.fixture('example').then(function(data)
        {
            globalThis.data = data
        })
    })

    it('Framwork Example',()=> {
      cy.visit('https://rahulshettyacademy.com/angularpractice/')

      cy.get('input[name="name"]:nth-child(2)').type(globalThis.data.name)

      cy.get('#exampleFormControlSelect1').select(globalThis.data.gender)

      cy.get('input[name="name"]:nth-child(1)').should('have.value',globalThis.data.name)

      cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')

      cy.get('#inlineRadio3').should('be.disabled')

      cy.get(':nth-child(2) > .nav-link').click()


    //! we can build this function as custom cypress command in support -> commands.js 
     // cy.selectProduct('Blackberry')
     // cy.selectProduct('Nokia Edge')
     cy.AddToCart('Blackberry')
     cy.AddToCart('Nokia Edge')


    })
} )