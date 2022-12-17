import {username,password} from '../fixtures/user.json'
describe('e-lab, forms',()=>{
   
    beforeEach(()=>{        
        cy.visit('https://www.elivelton.qa/login.php')
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
})