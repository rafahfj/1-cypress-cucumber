import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("/");
});

When("I enter valid credentials", () => {
  cy.get("#email").type("rafahfajrijuwaeni@gmail.com");
  cy.get("#password").type("lovesri");
});

When("I enter valid email and wrong password", () => {
  cy.get("#email").type("admin@example.com");
  cy.get("#password").type("wrongpass");
});

When("I leave email and password empty", () => {
  cy.get("#email").clear();
  cy.get("#password").clear();
});

When("I click the login button", () => {
  cy.get('button[type="submit"]').click();
});

When("I click the login page button", () => {
  cy.contains("button", "Login").click();
});

When("I click logout", () => {
  cy.contains("button", "Profile").click();
  cy.get("path").click();
  cy.get("ul li").eq(0).should("contain", "Account").click();
  cy.contains("button", "Log Out").click();
  cy.get(".relative .flex").contains("button", "Log Out").click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
Then("I should be redirected to the root", () => {
  cy.url().should("include", "/");
});

Then("I should see {string}", (message) => {
  cy.contains(message).should("be.visible");
});
