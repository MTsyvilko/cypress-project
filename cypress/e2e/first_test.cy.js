import homePage from "../support/page_object/home_page";
import dataMobileForm from "../support/page_object/data_mobile_form";
import data from "../fixtures/test_data.json";

describe('Testing of Dodo site', () => {
  it('Order test', () => {
    homePage.open();
    homePage.openPLP();
    homePage.checkURLforPLP();
    homePage.openChickenTikkaPizza();
    homePage.checkChickenTikkaTitle();
    homePage.clickCartButton();
    homePage.openDataMobileForm();
    dataMobileForm.inputAddress(data.address.street);
    dataMobileForm.selectAddress();
    dataMobileForm.inputEntrance(data.address.entrance, { force: true });
    dataMobileForm.inputDoor(data.address.door, { force: true });
    dataMobileForm.inputFloor(data.address.floor, { force: true });
    dataMobileForm.inputAppartment(data.address.flat, { force: true });
    dataMobileForm.inputComment(data.address.comment);
    dataMobileForm.createOrder();
  })
})