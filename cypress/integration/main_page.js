describe("Main Page tests", { defaultCommandTimeout: 7000 }, () => {
  beforeEach(() => {});
  // it("Loads page and article", () => {
  //   cy.visit('');
  //   cy.get(".post");
  // });

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

  it('fails always', () => {
    expect(2).to.equal(1);
  })

  it('shows a link to source', () => {
    cy.intercept("GET", "https://spaceflightnewsapi.net/api/v2/articles/", {
      headers: { "Access-Control-Allow-Origin": "*" },
      fixture: "articles.json",
    }).as("articlesRequest");
    cy.visit("");
    cy.get('.post').first().invoke('attr', 'href')
      .then(href => {
        cy.fixture("articles.json").then(articles => {
          expect(href).to.equal(articles[0].url);
      });
    });
  });
});
