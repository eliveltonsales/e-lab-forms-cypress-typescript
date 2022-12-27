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
        cy.get('#chkTerms').click()
        cy.get('#btnSave').should('be.enabled')
    })

    it('should show data warning after accepting terms and conditions',()=>{
        cy.get('#chkTerms').click()
        cy.get('#dataWarning').should('have.text',"The form data isn't stored anywhere!")
    })

    it('should be able to save form',()=>{
        cy.get('#txtName').type('Teste')
        cy.get('#txtNickname').type('Teste')
        cy.get('#txtEmail').type('Teste@teste.com')
        cy.get('#txtPassword').type('teste')
        cy.get('#txtCitizenID').type('111')
        cy.get('#txtPhone').type('111')
        cy.get('#chkTerms').click()
        cy.get('#btnSave').click()
        cy.get('#txtName').should('be.empty')
        cy.get('#dataWarning').should('not.be.visible')
    })
})