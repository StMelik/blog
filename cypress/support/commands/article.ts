import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Тестовая статья - Заголовок',
  subtitle: 'Тестовая статья - Описание',
  // eslint-disable-next-line max-len
  img: 'https://cdnn21.img.ria.ru/images/150113/97/1501139774_0:2:3289:1852_640x0_80_0_0_7deaead39d62e261cff49af5e4bf6424.jpg.webp',
  views: 1,
  createdAt: '28.03.2022',
  userId: '4',
  type: ['ECONOMICS'],
  blocks: []
};

export const createArticle = (article?: Article) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'auth' },
    body: article ?? defaultArticle
  }).then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'auth' }
  }).then(() => {
    cy.log('Статья', articleId, 'удалена');
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
