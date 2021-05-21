Feature: contact section

  Scenario: send a form
    Given I am on https://www.epam.com/about/who-we-are/contact
    When I fill the form and submit
    Then I get a success page