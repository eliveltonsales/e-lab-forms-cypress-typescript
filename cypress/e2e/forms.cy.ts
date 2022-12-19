import {username,password} from '../fixtures/user.json'
describe('e-lab, forms',()=>{
   
    beforeEach(()=>{        
        cy.visit('https://www.elivelton.qa/login.php')
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
    })
    
    it('should disable save button without terms accepted',()=>{           
        cy.get('#btnSave').should('be.disabled')
        cy.get('#chkPeopleTerms').click()
        cy.get('#btnSave').should('be.enabled')
    })
})