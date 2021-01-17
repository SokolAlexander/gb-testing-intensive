describe("Main Page tests", () => {
  // beforeEach(() => {});

  it("gets correct response", () => {
    cy.intercept("GET", "https://spaceflightnewsapi.net/api/v2/articles/", {
      headers: { "Access-Control-Allow-Origin": "*" },
      fixture: "articles.json",
    }).as("articlesRequest");
    cy.visit("");
    cy.wait("@articlesRequest").fixture("articles.json");
    cy.get(".post");
  });

  it("handles error response", () => {
    cy.intercept("GET", "https://spaceflightnewsapi.net/api/v2/articles/", {
      headers: { "Access-Control-Allow-Origin": "*" },
      statusCode: 500,
    }).as("articlesRequest");
    cy.visit("");
    cy.wait("@articlesRequest").then((req) => {
      expect(req.response.statusCode).to.equal(500);
    });
    cy.get('.error');
  });
});
