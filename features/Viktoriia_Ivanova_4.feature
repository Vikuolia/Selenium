Feature: Get to the main Page

  Scenario: Get to the main Page
    Given I am on any page of https://www.epam.com/
    When I click "<epam>" sign
    Then I should be on the main page