describe("user page tests", () => {
  it("opens user page", () => {
    cy.visit('');
    cy.contains("User").click();

    cy.url().should("include", "/user");
  });

  it("saves user name", () => {
    cy.visit("/user");
    cy.get("input").click().type('Tester');
    cy.contains('Save').click();

    cy.get('.user-name').should('contain.text', 'Tester');
  });

  it("shows toast on update", () => {
    cy.clock();
    cy.visit("/user");
    cy.get("input").click().type("Tester");
    cy.contains("Save").click();

    cy.get("input").click().clear().type("Tester2");
    cy.contains("Save").click();

    cy.get("[data-testid=toast]");
    cy.tick(3100);
    cy.get("[data-testid=toast]").should("not.exist");
  });
});
