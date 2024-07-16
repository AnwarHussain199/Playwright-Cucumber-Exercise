Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  When I will add the backpack to the cart
  When I select the cart
  When I select Checkout
  When I fill in the First Name as 'John', Last Name as 'Doe', and Zip/Postal Code as '12345'
  When I select Continue
  When I select Finish
  Then I validate the text 'Thank you for your order!'
