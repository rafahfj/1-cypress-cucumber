import "./commands";

cy.loginWith({
  email: "abc@gmail.com",

  password: "mypassword",
})

  .url()

  .should("eq", "/")

  .window()
  .its("localStorage.email")

  .should("eq", "abc@gmail.com");
