import {username,password} from '../fixtures/user.json'
describe('e-lab, forms',()=>{
   
    beforeEach(()=>{        
        cy.visit('http://elivelton.qa/login.php')
    })
    
    it('should login',()=>{           
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
        cy.contains('e-lab form').should('be.visible')
    })

    it('should not login',()=>{
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type('***')
        cy.get('#btnLogin').click()
        cy.get('.loginfail').should('have.text','Invalid Credentials!')
    })

    it('should redirect to guide page',()=>{
        cy.get('#btnHelp').click()
        cy.contains('h4','about')
        cy.contains('h4','how to use')
        cy.contains('h4','projects')
        cy.contains('h4','how to contribute')
        cy.contains('h4','contact')
        cy.contains('h4','credits')
    })
})