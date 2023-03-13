class dataMobileForm {

    get getStreetAddressField(){
        return cy.contains('label','Enter your street address').siblings('input');
    }

    get getAddress() {
        return cy.get('li[class="item"]').eq(0);
    }

    get getEntranceField(){
        return cy.contains('label','Entrance').siblings('input');
    }

    get getDoorCodeField(){
        return cy.get("input[name='doorCode']");
    }

    get getFloorField(){
        return cy.get("input[name='floor']");
    }

    get getAppartmentField(){
        return cy.get("input[name='apartment']");
    }

    get getCommentField(){
        return cy.get("input[name='comment']");
    }

    get getSaveButton(){
        return cy.get('button[type="submit"]');
    }      
}

export default new dataMobileForm;