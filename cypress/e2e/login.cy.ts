describe('e-lab, forms',()=>{
    beforeEach(()=>{
        cy.visit('https://www.elivelton.qa/login.php')
    })

    it('should login',()=>{
        cy.get('#txtUsername').type('forms')
        cy.get('#txtPassword').type('f0rm5')
        cy.get('#btnLogin').click()
        cy.contains('e-lab form').should('be.visible')
    })

    it('should not login',()=>{
        cy.get('#txtUsername').type('forms')
        cy.get('#txtPassword').type('***')
        cy.get('#btnLogin').click()
        cy.get('.loginfail').should('have.text','Invalid Credentials!')
    })
})