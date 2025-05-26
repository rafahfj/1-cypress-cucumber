Feature: Login

  Scenario: Successful login
    Given I open the login page
    And I click the login page button
    When I enter valid credentials
    And I click the login button
    And I click logout
    Then I should be redirected to the dashboard

  Scenario: Wrong password
    Given I open the login page
    And I click the login page button
    When I enter valid email and wrong password
    And I click the login button
    Then I should see "Kredensial yang diberikan tidak valid. Silakan periksa dan coba lagi."


  Scenario: Empty fields
    Given I open the login page
    And I click the login page button
    When I leave email and password empty
    And I click the login button
    Then I should see "Email is not valid"
  
