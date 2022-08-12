/// <reference types="cypress" />
describe("interacting with input field", () => {
  it("visit google home page", () => {
    cy.visit("https://www.google.com");
  });
  it("click on input field", () => {
    cy.get("#W0wltc > .QS5gu").click();
    cy.get("[name='q']").click();
  });
});
