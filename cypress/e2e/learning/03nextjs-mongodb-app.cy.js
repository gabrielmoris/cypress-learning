/// <reference types="cypress" />

describe("test feeds ae available", () => {
  it("visit feed page", () => {
    cy.visit("http://localhost:3000/feed");
  });
  it("counts the feed", () => {
    //I Mock the data
    cy.intercept("get", "http://localhost:3000/api/posts?limit=10", {
      fixture: "03nextjs-mongodb-app-mock-data.json",
    });
    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
  });
  it("sign in a user", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[type=email]").type("mock@mail.com");
    cy.get("input[type=password]").type("password");
    cy.get("form").submit();
  });

  it("create a post", () => {
    //1. check that we have only 2 posts
    cy.intercept("get", "http://localhost:3000/api/posts?limit=10", {
      fixture: "03nextjs-mongodb-app-mock-data.json",
    });
    cy.get(".PostList_root__Cj_24")
      .find(".Post_root__6WEkA")
      .should("be.visible")
      .and("have.length", 2);
    //2. create a post
    cy.intercept("post", "http://localhost:3000/api/posts", {
      body: { content: "I am just writting whatever" },
    });

    //this wont be sent to the server, it is just mocked
    cy.get(".Input_input__fo8G3")
      .type("wtting form cypress")
      .then(() => {
        cy.get("form").submit();
        cy.contains("You have posted successfully");
      });
  });
});
