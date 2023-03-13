class HomePage{
    get getPizzaLink() {
        return cy.contains('a','Pizza');  
    }

    get getChickenTikkaLink() {
        return  cy.contains('a','Chicken Tikka');
    }

    get getAddToCartButton() {
        return cy.get('[data-testid="button_add_to_cart"]');
    }

    get getSpecifyTheDeliveryAddressButton() {
        return cy.contains('button', 'Specify the delivery address');
    }
       
    open(){
        cy.visit('/');
    }
}
export default new HomePage;