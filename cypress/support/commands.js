const visitAviasalesHomePage = () => {
    cy.visit('https://www.aviasales.com');
}
Cypress.Commands.add('visitAviasalesHomePage', visitAviasalesHomePage);

const enableOrDisableNightTheme = () => {
    cy.get('.s__yL9sDjhz6ndaRdJgBqvD').click();
}
Cypress.Commands.add('enableOrDisableNightTheme', enableOrDisableNightTheme);

const setOriginAsNewYork = () => {
    // I'm adding a {backspace} here because the first character was not being typed
    cy.get('#origin').type(' {backspace}New York');
    cy.get('div.autocomplete__suggestion-info > span.autocomplete__suggestion-main-name').each(($el, index, $list) => {
      if($el.text() === 'John F. Kennedy International Airport') {
        $el.click();
      }
    });
}
Cypress.Commands.add('setOriginAsNewYork', setOriginAsNewYork);

const setDestinationAsBerlin = () => {
]   // I'm adding a {backspace} here because the first character was not being typed
    cy.get('#destination').type(` {backspace}Berlin`);
}
Cypress.Commands.add('setDestinationAsBerlin', setDestinationAsBerlin);

const selectDepartDateAsOctober30 = () => {
    cy.get('[aria-label="Mon Oct 30 2023"]').click();
}
Cypress.Commands.add('selectDepartDateAsOctober30', selectDepartDateAsOctober30);

const set2AdultPassengersInEconomicClass = () => {
    cy.get('[data-test-id="passengers-field"]').click();
    cy.get('.additional-fields__passenger-control.--increment').eq(0).click();
    cy.get('.additional-fields__trip-class > div > label').each(($el, index, $list) => {
      if($el.text() === 'Economy') {
        $el.click();
      }
    });
    cy.get('.h__Z1CqtZzeLkO0c8DmNHV7.h__u5XZeMb_TRUN_16zDQhj').click()
    cy.get('.of_input_checkbox__label').click();
}
Cypress.Commands.add('set2AdultPassengersInEconomicClass', set2AdultPassengersInEconomicClass);

const submitForm = () => {
    cy.get('[data-test-id="form-submit"]').click();
}
Cypress.Commands.add('submitForm', submitForm);

const verifyTheSearchPageLoaded = () => {
    // Checking the title of the page, to see if it updated
    cy.title().should('contain', 'NYC').should('contain', 'BER');
    // Checking if the tickets list loaded
    cy.get('.product-list').should('exist');
}
Cypress.Commands.add('verifyTheSearchPageLoaded', verifyTheSearchPageLoaded);

const verifyTheEnteredDataIsDisplayed = () => {
    cy.get('#origin').should('have.value', 'John F. Kennedy International Airport');
    cy.get('#destination').should('have.value', 'Berlin');
    cy.get('.trip-duration__date-input[placeholder="Depart"]').should('have.value', 'Mon, October 30')
    cy.get('.trip-duration__date-input[placeholder="Return"]').should('have.value', '');
    cy.get('.additional-fields__label').eq(0).should('have.text', '2 passengers');
    cy.get('.additional-fields__label').eq(1).should('have.text', 'economy');
}
Cypress.Commands.add('verifyTheEnteredDataIsDisplayed', verifyTheEnteredDataIsDisplayed);
