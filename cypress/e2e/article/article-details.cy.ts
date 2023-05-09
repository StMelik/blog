let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;

      cy.log('Создана статья с id', article.id);

      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('И статья загрузилась', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    // Описать совпадение заголовка и др.
  });

  it('И загрузился список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('Тестовый комментарий');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('И оценивает статью', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'Отзыв');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
