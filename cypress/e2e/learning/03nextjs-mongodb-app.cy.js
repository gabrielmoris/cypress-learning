/// <reference types="cypress" />

describe("test feeds ae available", () => {
  let baseUrl;
  before(() => {
    baseUrl = Cypress.env("baseUrl");
  });

  beforeEach(() => {
    //I Mock the data
    cy.intercept("get", `${baseUrl}/api/posts?limit=10`, {
      fixture: "03nextjs-mongodb-app-mock-data.json",
    });
  });

  it("visit feed page", () => {
    cy.visit(`${baseUrl}/feed`);
  });
  it("counts the feed", () => {
    //cy.posts() is a custom command created in ./cypress/support/commands.js
    cy.posts().should("have.length", 2);
  });
  it("sign in a user", () => {
    cy.login(baseUrl);
  });

  it("create a post", () => {
    cy.posts().and("have.length", 2);
    //2. create a post
    cy.intercept("post", `${baseUrl}/api/posts`, {
      body: { content: "I am just writting whatever" },
    });

    //this wont be sent to the server, it is just mocked
    // cy.get(".Input_input__fo8G3")
    //   .type("writting form cypress")
    //   .then(() => {
    //     cy.get("form").submit();
    //     cy.contains("You have posted successfully");
    //   });

    //this is the same as the commented one, but with a custom command done in ./cypress/support/comands.js
    cy.createPost("I am writting this with a ustom command. COOL!!");
  });
});
