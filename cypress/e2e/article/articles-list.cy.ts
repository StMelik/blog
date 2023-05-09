describe('Пользователь заходит на страницу статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('/articles');
    });
  });

  it('И статьи успешно загружаются', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles-list.json' });

    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it.skip('Тестовый скип теста', () => {
    cy.get('notFoundSelector').should('exist');
  });
});
