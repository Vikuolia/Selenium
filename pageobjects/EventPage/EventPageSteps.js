'use strict';

import {browser} from "protractor";

let EventPage = require('./eventPage');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


let eventPageObject = new EventPage();

let eventPageSteps = {

    clickLearnButton: (href) => eventPageObject.clickButton(eventPageObject.learnButton.href=href),

    checkWebPage: (url) => expect(browser.getCurrentUrl()===url).to.eventually.be.true
};

module.exports = eventPageSteps;