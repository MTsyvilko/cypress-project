class dataMobileForm {
    constructor(){
        this.addressList = 'li[class="item"]';
        this.doorField = 'input[name="doorCode"]';
        this.floorField = 'input[name="floor"]';
        this.appartmentField = 'input[name="apartment"]';
        this.commentField = 'input[name="comment"]';
        this.saveButton = 'button[type="submit"]';
    }
   
    inputAddress(street){
        cy.contains('label','Enter your street address').siblings('input').type(street);
    }

    selectAddress() {
        cy.get(this.addressList).eq(0).click();
    }

    inputEntrance(entrance, configuration){
        cy.contains('label','Entrance').siblings('input').type(entrance, configuration);
    }

    inputDoor(door, configuration){
        cy.get(this.doorField).type(door, configuration);
    }

   inputFloor(floor, configuration){
        cy.get(this.floorField).type(floor, configuration);
    }

    inputAppartment(appartment, configuration){
        cy.get(this.appartmentField).type(appartment, configuration);
    }

    inputComment(comment) {
        cy.get(this.commentField).type(comment);
    }

    createOrder(){
        cy.get(this.saveButton).click();
    }      
}

export default new dataMobileForm;