///<reference types='Cypress'/>

import HomePage from "../../support/pageObjects/HomePage"

import ProductPage from "../../support/pageObjects/ProductPage"

import CheckoutPage from "../../support/pageObjects/CheckoutPage"

import PurchasePage from "../../support/pageObjects/PurchasePage"


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

        const homePage = new HomePage()

        const productPage = new ProductPage()

        const checkoutPage = new CheckoutPage()

        const purchasePage = new PurchasePage()
       
      cy.visit( Cypress.env('url')+"/angularpractice/")

      homePage.getEditBox().type(globalThis.data.name)

      homePage.getGender().select(globalThis.data.gender)

      homePage.getTwoWayDataBinding().should('have.value',globalThis.data.name)

      homePage.getEditBox().should('have.attr','minlength','2')

      homePage.getEnterpreneaur().should('be.disabled')

      homePage.getShopTab().click()


    //! we can build this function as custom cypress command in support -> commands.js 
     // cy.selectProduct('Blackberry')
     // cy.selectProduct('Nokia Edge')
    //  cy.AddToCart('Blackberry')
    //  cy.AddToCart('Nokia Edge')

     //! Adding multiple product with array from json

     globalThis.data.productName.forEach(function(element) {
        cy.AddToCart(element)
     });

     productPage.checkOutButton().click()

     var sum = 0
     checkoutPage.poductPrice().each(($el,index,$list)=>{
        const amount = $el.text()
       var result = amount.split(" ") //Split string with white spaces to get ineger of price 
       result = result[1].trim()   //remove spaces before or after
       sum = Number(sum) + Number(result)
     }).then(function(){  //resolving with Then() js sum
        cy.log(sum)
     })

     checkoutPage.totalPrice().then(function(element){
        const amount = element.text()
        var result = amount.split(" ")
        var total = result[1].trim()
        expect(Number(total)).to.equal(sum)
     })

     checkoutPage.CheckoutButton().click()

     purchasePage.chooseCountryEditbox().type('India')

     Cypress.config('defaultCommandTimeout',8000)

     purchasePage.autoSuggestIndia().click()

     purchasePage.termsConditionCheckbox().click({force:true})

     purchasePage.purchaseButton().click()

     //!Assert text has some spaces so using include method with then() function  
     //purchasePage.successMessage().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
     //.should('be.true')expect(true).to.be.true using chai assertion
     purchasePage.successMessage().then(function(element){
        const actualText = element.text()
       expect(actualText.includes("Success")).to.be.true  // Chai Assertion cypress
     })
        

    })
} )