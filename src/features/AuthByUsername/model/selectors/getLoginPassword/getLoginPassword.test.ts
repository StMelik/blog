import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('Получить поле password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'test'
      }
    };

    expect(getLoginPassword(state as StateSchema)).toBe('test');
  });

  test('Получить поле password если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
