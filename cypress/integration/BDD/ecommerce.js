import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor/steps";

import HomePage from "../../support/pageObjects/HomePage"

import ProductPage from "../../support/pageObjects/ProductPage"

import CheckoutPage from "../../support/pageObjects/CheckoutPage"

import PurchasePage from "../../support/pageObjects/PurchasePage"

const homePage = new HomePage();

const productPage = new ProductPage();

const checkoutPage = new CheckoutPage();

const purchasePage = new PurchasePage();
Given("I open Ecommerce page", function()  {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to cart", function() {
  homePage.getShopTab().click();
  globalThis.data.productName.forEach(function (element) {
    cy.AddToCart(element);
  });
  productPage.checkOutButton().click();
});

When("Validate the total prices", function() {
  var sum = 0;
  checkoutPage
    .poductPrice()
    .each(($el, index, $list) => {
      const amount = $el.text();
      var result = amount.split(" "); //Split string with white spaces to get ineger of price
      result = result[1].trim(); //remove spaces before or after
      sum = Number(sum) + Number(result);
    })
    .then(function () {
      //resolving with Then() js sum
      cy.log(sum);
    });

  checkoutPage.totalPrice().then(function (element) {
    const amount = element.text();
    var result = amount.split(" ");
    var total = result[1].trim();
    expect(Number(total)).to.equal(sum);
  });

  checkoutPage.CheckoutButton().click();
});

Then("select the country submit and verify Thankyou", function() {
  purchasePage.chooseCountryEditbox().type("India");

  Cypress.config("defaultCommandTimeout", 8000);

  purchasePage.autoSuggestIndia().click();

  purchasePage.termsConditionCheckbox().click({ force: true });

  purchasePage.purchaseButton().click();

  //!Assert text has some spaces so using include method with then() function
  //purchasePage.successMessage().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
  //.should('be.true')expect(true).to.be.true using chai assertion
  purchasePage.successMessage().then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success")).to.be.true; // Chai Assertion cypress
  });

  
});
