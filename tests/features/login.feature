Feature: Login Amazon
    As a user
    I want to login successfully
    Or get the message when I meet the trouble

    @TC1
    Scenario: I login with correct username and password
        Given I go to page "homePage"
        When I move to signin link
        When I click on signin button home page
        Then I should be on page "signinPage"
        When I input "ledaivuong1990@gmail.com" as email
        When I click on continue button
        When I input "ltmlmaslvd" as password
        When I click on signin button
        Then I should be welcome as "ledaivuong"
    
    @TC2
    Scenario: I login with incorrect username
        Given I go to page "homePage"
        When I move to signin link
        When I click on signin button home page
        Then I should be on page "signinPage"
        When I input "xxxxx" as email
        When I click on continue button
        Then I should see "We cannot find an account with that email address" as error message for invalid email

    @TC3
    Scenario: I login with incorrect password
        Given I go to page "homePage"
        When I move to signin link
        When I click on signin button home page
        Then I should be on page "signinPage"
        When I input "ledaivuong1990@gmail.com" as email
        When I click on continue button
        When I input "xxxxxx" as password
        When I click on signin button
        Then I should see "Your password is incorrect" as error message for invalid password

    @TC4
    Scenario: I login with empty email
        Given I go to page "homePage"
        When I move to signin link
        When I click on signin button home page
        Then I should be on page "signinPage"
        When I click on continue button
        Then I should see "Enter your email or mobile phone number" as validate message for missing email

    @TC5
    Scenario: I login with empty password
        Given I go to page "homePage"
        When I move to signin link
        When I click on signin button home page
        Then I should be on page "signinPage"
        When I input "ledaivuong1990@gmail.com" as email
        When I click on continue button
        When I click on signin button
        Then I should see "Enter your password" as validate message for missing password


