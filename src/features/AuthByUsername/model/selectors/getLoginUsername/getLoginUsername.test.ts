import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('Получить поле username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username'
      }
    };

    expect(getLoginUsername(state as StateSchema)).toBe('username');
  });

  test('Получить поле username если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
