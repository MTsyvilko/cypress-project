class HomePage {

    constructor() {
        this.buttonAddToCart = '[data-testid="button_add_to_cart"]';
    }

    //PLP = product listing page
    openPLP() {
        cy.contains('a', 'Pizza').click();
    }

    checkURLforPLP() {
        cy.url().should('include', '#pizzas');
    }

    openChickenTikkaPizza() {
        cy.contains('a', 'Chicken Tikka').click();
    }

    checkChickenTikkaTitle() {
        cy.contains('h1', 'Chicken Tikka').should('exist');
    }

    clickCartButton() {
        cy.get(this.buttonAddToCart).click();
    }

    openDataMobileForm() {
        cy.contains('button', 'Specify the delivery address').click();
    }

    open() {
        cy.visit('/');
    }
}
export default new HomePage;