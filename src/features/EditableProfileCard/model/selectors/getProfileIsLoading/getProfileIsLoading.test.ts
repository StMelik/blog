import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('Получить поле isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    };

    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });

  test('Получить поле isLoading если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBe(false);
  });
});
