Feature: Business rules
  In order to achieve my goals
  As a Business
  I should be able to use the search functionality

  @TableScenario
  Scenario: search functionality
    Given I am on homepage
    When I enter "<product>" into search bar
    Then I should see "<result>" in the search results

    Examples:
      | product   | result    |
      | Product 1 | Product 1 |
      | Product 2 | Product 2 |
      | Product 3 | Product 3 |
      | Product 4 | Product 4 |
      | Product 5 | Product 5 |