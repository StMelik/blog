import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('Получить поле error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    };

    expect(getProfileError(state as StateSchema)).toBe('error');
  });

  test('Получить поле error если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBe('');
  });
});
