Feature: Searching feature

  Scenario: Use searching feature
    Given I am on https://www.epam.com/careers/job-listings
    When I fill in 'keyword' form
    And I click Find button
    Then Suitable jobs are displayed