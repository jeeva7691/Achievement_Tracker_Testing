// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit("http://localhost:4200").wait(200);
  });

  Cypress.Commands.add("NavigatetoAddAchievementForm", () => {
    cy.xpath("/html[1]/body[1]/app-root[1]/app-sidenav[1]/div[1]/ul[1]/li[2]/a[1]/i[1]").click()
});


Cypress.Commands.add("CheckAllTheLabels", () => {
    cy.xpath("//label[contains(text(),'Date of Achievement:')]").contains("Date of Achievement:")
    cy.xpath("//label[contains(text(),'Achievement Description:')]").contains("Achievement Description:")
    cy.xpath("//label[contains(text(),'Why You Felt It Is an Achievement:')]").contains("Why You Felt It Is an Achievement:")
    cy.xpath("//label[contains(text(),'Attachments:')]").contains("Attachments:")
    cy.xpath("//button[contains(text(),'Submit')]").contains("Submit")
    cy.xpath("//button[contains(text(),'Cancel')]").contains("Cancel")
});

Cypress.Commands.add("CurrentDateSelection",()=>{
    cy.xpath("//input[@id='date']").type('2024-07-03', { delay: 800 }).clear('have.value', '')
})

Cypress.Commands.add("PastDateSelection",()=>{
    cy.xpath("//input[@id='date']").type('2024-07-01', { delay: 800 }).clear('have.value', '');
})
Cypress.Commands.add("FutureDateSelection",()=>{
    cy.xpath("//input[@id='date']").type('2024-07-06', { delay: 800 }).clear('have.value', '');
})

Cypress.Commands.add("ClickOnCancel",()=>{
   cy.xpath("/html[1]/body[1]/app-root[1]/app-sidenav[1]/div[2]/app-forms[1]/div[2]/form[1]/div[5]/button[2]").click()
})

Cypress.Commands.add("NavigatedToDashBoard",()=>{
    cy.get("h1").contains("Achievements")
})



