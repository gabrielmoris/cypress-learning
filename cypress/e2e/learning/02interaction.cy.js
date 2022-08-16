/// <reference types="cypress" />
describe("interacting with input field", () => {
  it("visit google home page", () => {
    cy.visit("https://www.google.com");
  });
  // it("click on input field repeating dropdownMenu", () => {
  //   //clicking accept terms button to avoid popup
  //   const acceptBtn = cy.get("#W0wltc > .QS5gu");
  //   acceptBtn.click();
  //   //click input field
  //   const inputFieldGoogle = cy.get("[name='q']");
  //   inputFieldGoogle.click();
  //   //write "a" in input field and checking that I have a dropdown menu which has Amazon as sugesion
  //   inputFieldGoogle.type("a");
  //   const dropdownMenuBefore = cy.get(".aajZCb");
  //   dropdownMenuBefore.should("be.visible").contains("Amazon");
  //   //click in google logo (outside of input) and the dropdown menu disapears
  //   const googleLogo = cy.get(".LLD4me");
  //   googleLogo.click();
  //   const dropMenuAfter = cy.get(".aajZCb");
  //   dropMenuAfter.should("not.be.visible");
  // });
  // it("click on input field checking the same dropdownMenu", () => {
  //   //clicking accept terms button to avoid popup
  //   // const acceptBtn = cy.get("#W0wltc > .QS5gu");
  //   // acceptBtn.click();
  //   //click input field
  //   const inputFieldGoogle = cy.get("[name='q']");
  //   inputFieldGoogle.click();
  //   //write "a" in input field and checking that I have a dropdown menu which has Amazon as sugesion
  //   // inputFieldGoogle.type("a");
  //   const dropdownMenu = ".aajZCb";
  //   cy.get(dropdownMenu).should("be.visible").contains("Amazon");
  //   //click in google logo (outside of input) and the dropdown menu disapears
  //   const googleLogo = cy.get(".LLD4me");
  //   googleLogo.click();
  //   cy.get(dropdownMenu).should("not.be.visible");
  // });

  it("click again on imput field, this time I simplify the dropmenu selection", () => {
    //click to disable PopUp
    cy.get("#W0wltc > .QS5gu").click();
    //click input field and write a
    cy.get("[name='q']").click().type("a");
    //select dropdown and check that i vissible and Has Amazon in
    cy.get(".aajZCb").as("dropDownMenu");
    cy.get("@dropDownMenu").should("be.visible").contains("Amazon");
    //click in the google logo
    cy.get(".LLD4me").click();
    //dropdown shouldn't be visible
    cy.get("@dropDownMenu").should("not.be.visible");
  });

  it("type bitfumes on the search input field and asset suggestion and click", () => {
    cy.get("[name='q']").clear().type("manuel casares");
    //1st way
    // cy.get(":nth-child(4) > .eIPGRd").contains("manuel casares piano");
    //2nd way
    cy.get(".erkvQe > .OBMEnb > ul")
      .find("li")
      .eq(3)
      .contains("manuel casares piano")
      .click();

    cy.contains("https://www.manuelcasares.com");
  });

  it("type bitfumes on the search input field and asset suggestion and press enter", () => {
    cy.visit("https://www.google.com");
    //click to disable PopUp
    cy.get("#W0wltc > .QS5gu").click();
    cy.get("[name='q']")
      .clear()
      .type("manuel casares piano {enter}", { delay: 100 });

    cy.contains("https://www.manuelcasares.com");
    cy.get('[href="https://www.manuelcasares.com/"] > .LC20lb').click();
  });
});
