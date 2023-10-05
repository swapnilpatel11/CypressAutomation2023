class CheckoutPage{
    CheckoutButton(){
        return cy.get('.btn.btn-success')
    }

    poductPrice(){
        return cy.get('tr td:nth-child(4) strong')
    }

    totalPrice(){
        return cy.get('h3 strong')
    }

}

export default CheckoutPage

