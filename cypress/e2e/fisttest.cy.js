import homePage from "../support/page_object/home_page";
describe('Testing of Dodo site', () => {
    it('Test application', () => {
      
      homePage.open();   
      homePage.getPizzaLink.click();    
      // cy.url().should('include', '#pizzas');
      // cy.contains('a','Chicken Tikka').click();
      // cy.contains('h1','Chicken Tikka').should('exist');
     

      
     
      // 
      // cy.url().should('include', '/Account/Login');
      // cy.get('#UserName').type('admin');
      // cy.get('#Password').type('password');
      // cy.get('.btn').click();
    })
  })