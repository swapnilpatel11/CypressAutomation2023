class PurchasePage{

    chooseCountryEditbox(){
        return cy.get('#country')
    }

    autoSuggestIndia(){
        return cy.get("div[class='suggestions'] ul li a")
    }

    termsConditionCheckbox(){
        return cy.get("label[for='checkbox2']")
    }

    purchaseButton(){
        return cy.get("input[type='submit']")
    }

    successMessage(){
        return cy.get('.alert.alert-success.alert-dismissible')
    }

}

export default PurchasePage