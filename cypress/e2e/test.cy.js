describe('Tests to the Aviasales home page', () => {
  it('Enable dark theme, and make a search for plane tickets from New York to Berlin', () => {
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


