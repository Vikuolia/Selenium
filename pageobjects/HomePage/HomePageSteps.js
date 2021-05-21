'use strict';

let HomePage = require('./HomePage');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
const {browser} = require("protractor");
chai.use(chaiAsPromised);
let expect = chai.expect;

let homePageObject = new HomePage();

let homePageSteps = {

    clickEpamLogo: () => homePageObject.clickButton(homePageObject.logo),

    clickGlobalLan: () => homePageObject.clickButton(homePageObject.language),

    clickPolishOption: () => homePageObject.clickButton(homePageObject.polish),

    clickSearchButton: () => homePageObject.clickButton(homePageObject.searchBut),

    checkSearchField: () => expect(homePageObject.isElementVisible(homePageObject.searchField)).to.eventually.be.true,

    checkSearchValue: (searchReq) => expect(homePageObject.searchValue===searchReq).to.eventually.be.true,

    clickSearchSubmitButton: () => homePageObject.clickButton(homePageObject.searchSubmit),

    checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true,

    clickContactsButton: () => homePageObject.clickButton(homePageObject.contactsButton)


};

module.exports = homePageSteps;