import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/constants/localStorage';

export const login = (username: string = 'testUser', password: string = '123') => {
  cy.log(`Выполняется вход => ${username}`);

  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
  });
};

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(username?: string, password?: string): Chainable<void>;
//     }
//   }
// }
