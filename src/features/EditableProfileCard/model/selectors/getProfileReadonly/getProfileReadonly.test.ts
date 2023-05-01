import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('Получить поле readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    };

    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });

  test('Получить поле readonly если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
