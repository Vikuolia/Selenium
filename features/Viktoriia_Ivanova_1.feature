Feature: Translate

  Scenario: Translate site page
    Given I'm in Epam site
    When I entered Global EN
    And chose Polish language
    Then Site was translated