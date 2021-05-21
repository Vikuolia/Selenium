'use strict';

let ReferralPage = require('./ReferralPage');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


let referralPageObject = new ReferalPage();

let referralPageSteps = {

    clickSubmit: () => referralPageObject.clickButton(referralPageObject.submitFormButtom),

    checkSuccess: () => expect(referralPageObject.isElementVisible(referralPageObject.successField)).to.eventually.be.true

};

module.exports = referralPageSteps;