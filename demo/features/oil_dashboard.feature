Feature: Write test case with the help of Cucumber with Protractor using Javascript

Scenario: Open menu , move to Oil and GAs dasboard , check the consolidated well activity
Given Menu is clicked 
When I click on Oil and Gas Dashboard
Then scroll down 
And click on the dropdown
Then The month , day and yearly reading should be displayed