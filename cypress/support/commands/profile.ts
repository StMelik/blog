export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstNameInput').clear().type(firstname);
  cy.getByTestId('ProfileCard.LastNameInput').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'auth' },
    body: {
      id: '4',
      first: 'Тестовый',
      lastname: 'Пользователь',
      age: 333,
      currency: 'EUR',
      country: 'Armenia',
      city: 'Karaganda',
      username: 'testUser',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQADxKBqWGp4ovszHPo1bgz0uD51olEKaxw&usqp=CAU'
    }
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
