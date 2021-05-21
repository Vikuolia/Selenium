'use strict';

let JobsPage = require('./jobPage');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

let jobsPageObject = new JobsPage();

let jobsPageSteps = {

    checkForm: (value) => expect(jobsPageObject.jobSearchReqValue===value).to.eventually.be.true,

    clickFindButton: () => jobsPageObject.clickButton(jobsPageObject.findButton),

    checkResultsDisplayed: () => expect(jobsPageObject.isElementVisible(jobsPageObject.results)).to.eventually.be.true
};

module.exports = jobsPageSteps;