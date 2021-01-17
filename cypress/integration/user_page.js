describe('user page tests', () => {
  it('opens user page', () => {
    cy.visit('');
    cy.contains("User").click();

    cy.url().should('include', "/user");
  });

  it('saves user name', () => {
    cy.visit('/user');
    cy.get('input').click().type('text');

    cy.contains('Save').click();

    cy.get('.user-name').should('contain.text', 'text');
  });

  it("shows and hides toast", () => {
    cy.clock();
    cy.visit("/user");

    cy.get("input").click().type("text");
    cy.contains("Save").click();

    cy.get("input").click().type("text2");
    cy.contains("Save").click();

    cy.get("[data-testid=toast]");
    cy.tick(3100);
    cy.get('.toast').should('not.be.visible');
  });
});
