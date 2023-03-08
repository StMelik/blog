import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('Получить поле isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    };

    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  test('Получить поле isLoading если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
