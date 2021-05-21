Feature: EPAM in the US

  Scenario: Refer to EPAM in the US
    Given I am on https://www.epam.com/careers/refer-to-epam#form
    When I fill the form and submit it refering a chosen person
    Then I get the acknowledge that my form will be processed