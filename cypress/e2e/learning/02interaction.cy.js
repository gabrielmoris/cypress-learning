/// <reference types="cypress" />
describe("interacting with input field", () => {
  it("visit google home page", () => {
    cy.visit("https://www.google.com");
  });
  it("click on input field repeating dropdownMenu", () => {
    //clicking accept terms button to avoid popup
    const acceptBtn = cy.get("#W0wltc > .QS5gu");
    acceptBtn.click();
    //click input field
    const inputFieldGoogle = cy.get("[name='q']");
    inputFieldGoogle.click();
    //write "a" in input field and checking that I have a dropdown menu which has Amazon as sugesion
    inputFieldGoogle.type("a");
    const dropdownMenuBefore = cy.get(".aajZCb");
    dropdownMenuBefore.should("be.visible").contains("Amazon");
    //click in google logo (outside of input) and the dropdown menu disapears
    const googleLogo = cy.get(".LLD4me");
    googleLogo.click();
    const dropMenuAfter = cy.get(".aajZCb");
    dropMenuAfter.should("not.be.visible");
  });
  it("click on input field checking the same dropdownMenu", () => {
    //clicking accept terms button to avoid popup
    // const acceptBtn = cy.get("#W0wltc > .QS5gu");
    // acceptBtn.click();
    //click input field
    const inputFieldGoogle = cy.get("[name='q']");
    inputFieldGoogle.click();
    //write "a" in input field and checking that I have a dropdown menu which has Amazon as sugesion
    // inputFieldGoogle.type("a");
    const dropdownMenu = ".aajZCb";
    cy.get(dropdownMenu).should("be.visible").contains("Amazon");
    //click in google logo (outside of input) and the dropdown menu disapears
    const googleLogo = cy.get(".LLD4me");
    googleLogo.click();
    cy.get(dropdownMenu).should("not.be.visible");
  });
});
