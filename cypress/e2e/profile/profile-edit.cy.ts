let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('profile');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('И профиль успешно загрузился', () => {
    cy.getByTestId('ProfileCard.FirstNameInput').should('have.value', 'Тестовый');
  });

  it('И редактирует его', () => {
    const newFirstname = 'Новое имя';
    const newLastname = 'Новая фамилия';

    cy.updateProfile(newFirstname, newLastname);

    cy.getByTestId('ProfileCard.FirstNameInput').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.LastNameInput').should('have.value', newLastname);
  });
});
