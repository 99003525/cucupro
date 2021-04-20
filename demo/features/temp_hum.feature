Feature: Write test case with the help of Cucumber with Protractor using Javascript

Scenario: Open menu , move to Iot Dashboard  , check out temp and humidity reading
Given  Menu is clicked 
And  I Click on IoT Dashboard 
And I Click on Temperature 
Then  Drag the slider from 0 to 100
And Click on the power button 
Then  Click on Humidity
And Drag the slider from 0 to 100
And Click on the power button 