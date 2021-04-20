Feature: Write test case with the help of Cucumber with Protractor using Javascript

Scenario: Open menu , move to Tables and Data , enter new data 
Given Menu is clicked 
When I click on Tables and data
And click on the smart table
And click on the add button
Then enter valid id,first name , last name ,username , email and age
