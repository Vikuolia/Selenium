'use strict';

let ContactPage = require('./contactPage');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let contactPageObject = new ContactPage();

let contactPageSteps = {

    clickSubmitForm: () => contactPageObject.clickButton(contactPageObject.submit),

    checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true,

    checkSuccess: () => expect(contactPage.formSuccess).to.eventually.be.true
};

module.exports = contactPageSteps;