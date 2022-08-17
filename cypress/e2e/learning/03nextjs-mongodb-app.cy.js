/// <reference types="cypress" />

describe("test feeds ae available", () => {
  let baseUrl;
  before(() => {
    baseUrl = "http://localhost:3000";
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
    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
  });
  it("sign in a user", () => {
    cy.visit(`${baseUrl}/login`);
    cy.get("input[type=email]").type("mock@mail.com");
    cy.get("input[type=password]").type("password");
    cy.get("form").submit();
  });

  it("create a post", () => {
    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
    //2. create a post
    cy.intercept("post", `${baseUrl}/api/posts`, {
      body: { content: "I am just writting whatever" },
    });

    //this wont be sent to the server, it is just mocked
    cy.get(".Input_input__fo8G3")
      .type("writting form cypress")
      .then(() => {
        cy.get("form").submit();
        cy.contains("You have posted successfully");
      });
  });
});
