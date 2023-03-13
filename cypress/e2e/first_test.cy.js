import homePage from "../support/page_object/home_page";
import dataMobileForm from "../support/page_object/data_mobile_form";
import data from "../fixtures/test_data.json";

describe('Testing of Dodo site', () => {
    it('Order test', () => {      
      homePage.open();   
      homePage.getPizzaLink.click();    
      cy.url().should('include', '#pizzas');
      homePage.getChickenTikkaLink.click();
      cy.contains('h1','Chicken Tikka').should('exist');
      homePage.getAddToCartButton.click();
      homePage.getSpecifyTheDeliveryAddressButton.click();
      dataMobileForm.getStreetAddressField.type(data.address.street);
      dataMobileForm.getAddress.click();
      dataMobileForm.getEntranceField.type(data.address.entrance, {force: true});
      dataMobileForm.getDoorCodeField.type(data.address.door, {force: true});
      dataMobileForm.getFloorField.type(data.address.floor, {force: true});
      dataMobileForm.getAppartmentField.type(data.address.flat, {force: true});
      dataMobileForm.getCommentField.type(data.address.comment);
      dataMobileForm.getSaveButton.click();          
    })
  })