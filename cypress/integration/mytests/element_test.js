describe('launch my app',()=>{
    it('app testing',()=>{
        cy.visit('https://webdriver.io/')
        cy.contains('Blog')
        cy.contains('Blog').click()
        cy.url().should('include','/blog')
    })
})