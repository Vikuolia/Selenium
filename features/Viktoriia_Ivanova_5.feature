Feature: Find vacancies

  Scenario: Find appropriate vacancies
    Given I am on the https://www.epam.com/
    When I click on careers page
    And click on Find button
    Then I should see appropriate vacancies