'use strict';
let {Then, When, Given} = require('@cucumber/cucumber');
let {checkWebPage, clickGlobalLan, clickPolishOption} = require('./../pageobjects/HomePage/HomePageSteps.js');
let contactPageSteps = require('../pageobjects/ContactPage/ContactPageSteps.js');
let homePageSteps = require("../pageobjects/HomePage/HomePageSteps");
let careersPageSteps = require('../pageobjects/CareersPage/CareersPageSteps.js');
let referralPageSteps = require('./../pageobjects/referralPage/referralPageSteps.js');
let jobsPageSteps = require('./../pageobjects/jobPage/jobPageSteps.js');
let eventPageSteps = require('./../pageobjects/eventPage/eventPageSteps.js');

module.exports = function () {

    // script 1
    When(/^I entered Global EN$/, clickGlobalLan());
    When(/^chose Polish language$/, clickPolishOption());
    Then(/^Site was translated$/, checkWebPage('https://careers.epam-poland.pl/'));

    // script 2
    When(/^I fill the form and submit$/, contactPageStepsPageSteps.clickSubmitForm());
    Then(/^I get a success page$/, contactPageSteps.checkSuccess());

    // script 3
    When(/^I click on "Contacts" button$/, homePageSteps.clickContactsButton());
    Then(/^I should get contact page$/, homePageSteps.checkWebPage('https://www.epam.com/company/contact'));


    // script 4
    When(/^I click "<epam>" sign$/, homePageSteps.clickEpamLogo());
    Then(/^I should be on the main page$/, homePageSteps.checkWebPage('https://www.epam.com'));

    // script 5
    When(/^click on Find button$/, careersPageSteps.clickFind);
    Then(/^I should see appropriate vacancies$/, careersPageSteps.checkWebPage('https://www.epam.com/careers/job-listings?country=Ukraine&city=Kyiv'));

    // script 6
    When(/^I fill the form and submit it refering a chosen person$/, referralPageSteps.clickSubmit());
    Then(/^I get the acknowledge that my form will be processed$/, referralPageSteps.checkSuccess());

    // script 7
    When(/^I fill in 'keyword' form$/, jobsPageSteps.checkForm("Analyst"));
    When(/^I click Find button$/, jobsPageSteps.clickFindButton());
    Then(/^Suitable jobs are displayed$/, jobsPageSteps.checkResultsDisplayed());

    // script 8
    When(/^I click learn button on chosen event$/, eventPageSteps.clickLearnButton("https://www.epam.com/about/who-we-are/events/2021/unlocking-hidden-value-in-ia-through-data-driven-process-discovery"));
    Then(/^I redirect to that event page$/, eventPageSteps.checkWebPage("https://www.epam.com/about/who-we-are/events/2021/unlocking-hidden-value-in-ia-through-data-driven-process-discovery"));

};