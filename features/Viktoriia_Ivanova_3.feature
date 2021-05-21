Feature: Contact Page

  Scenario: Get to contact page
    Given I am on https://www.epam.com/about/who-we-are/contact
    When I click on "Contacts" button
    Then I should get contact page