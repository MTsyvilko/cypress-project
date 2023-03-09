class HomePage{
    get getPizzaLink(){
        return cy.contains('a','Pizza');  
    }

    open(){
        cy.visit('/');
    }
}
export default new HomePage;