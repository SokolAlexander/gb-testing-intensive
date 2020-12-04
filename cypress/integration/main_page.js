describe("Main Page tests", () => {
  it("Loads page and article", () => {
    cy.visit('');
    cy.get(".post");
  });
});
