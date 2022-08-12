/// <reference types="cypress" />

describe("learn about locators", () => {
  it("visit google home page", () => {
    cy.visit("https://www.google.com");
  });
  it("can locate a button on the page", () => {
    cy.get("#W0wltc > .QS5gu").click();
    // cy.get(".gLFyf").type("It Works{enter}");
    cy.get('[name="q"]')
      .should("be.visible")
      .should("have.class", "gLFyf")
      .and("have.value", "")
      .and("have.attr", "maxlength", "2048");
  });
});
