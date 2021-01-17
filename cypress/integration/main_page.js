describe("Main Page tests", () => {
  it('opens main page', () => {
    cy.intercept("GET", "https://spaceflightnewsapi.net/api/v2/articles/", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      fixture: 'articles.json'
    });

    cy.visit('');
    cy.get('.post');
  });

  it("opens main page with error", () => {
    cy.intercept("GET", "https://spaceflightnewsapi.net/api/v2/articles/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 500,
    }).as('articlesRequest');

    cy.visit("");
    cy.wait('@articlesRequest');
    cy.get(".error");
  });

  it("shows link to article source", () => {
    cy.intercept("GET", "https://spaceflightnewsapi.net/api/v2/articles/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      fixture: 'articles.json',
    });

    cy.visit("");
    cy.get(".post a").first().invoke('attr', 'href')
      .then(href => {
        cy.fixture('articles.json').then(articles => {
          expect(href).to.equal(articles[0].url);
        })
      });
  });
});
