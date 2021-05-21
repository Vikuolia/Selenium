Feature: Choose an event

  Scenario: Take part in event
    Given I am on https://www.epam.com/about/who-we-are/events
    When I click learn button on chosen event
    Then I redirect to that event page