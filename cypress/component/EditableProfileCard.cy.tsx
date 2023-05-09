import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const PROFILE_ID = '4';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });

    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: { authData: { id: PROFILE_ID } }
          }
        }}
      >
        <EditableProfileCard id={PROFILE_ID} />
      </TestProvider>
    );

    // описываем тест кейс
  });
});
