// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//! new command to select productName for select product
Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el,index,$list)=>
    {
      if($el.text().includes('productName'))
      {
          cy.get('div button.btn').eq(index).click()
      }
    })
 })

 //! This custom command is from Udemy Comment Section --This is working solution
 Cypress.Commands.add("AddToCart", (productName) => {
 
  cy.contains('div.card', new RegExp(productName, 'i'))
    .each($card => {
      cy.wrap($card)
        .find('button').contains('Add')
        .click()
    })
  })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })