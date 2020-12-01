describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("http://localhost:3000/");
    cy.get('.post');
    cy.contains('User').click();

    cy.url().should("include", "/user");
  });
});
