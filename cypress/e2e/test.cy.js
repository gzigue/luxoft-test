describe('Tests to the Aviasales home page', () => {
  it('Enable dark theme, and make a search for plane tickets from New York to Berlin', () => {
    
    /*Task: implement web UI auto test for ticket search
    To do:
    - Navigate to https://www.aviasales.com/
    - Enable Night Theme
    - For FROM field set NEW York, Kennedy airport
    - For TO field set Berlin
    - For DATE field set October, 30
    - No returning ticket
    - Passengers – 2 adults, economy
    - Click search flight
    Assert that:
    - New search page is opened
    All previous data is displayed on the new page

    Additional requirements:
    - Browser - Chrome
    - Use JavaScript + framework you prefer (playwright as a plus)
    - Use public GIT (github, gitlab) repo to share results
    Deadline - till the October 27, 2023*/

    
    cy.visitAviasalesHomePage();
    cy.enableOrDisableNightTheme();
    cy.setOriginAsNewYork();
    cy.setDestinationAsBerlin();
    cy.selectDepartDateAsOctober30();
    cy.set2AdultPassengersInEconomicClass();
    cy.submitForm();
    cy.verifyTheSearchPageLoaded();
    cy.verifyTheEnteredDataIsDisplayed();
    
  })
})


