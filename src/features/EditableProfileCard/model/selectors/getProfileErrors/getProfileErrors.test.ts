import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { getProfileErrors } from './getProfileErrors';

const validateErrors = [
  ValidateProfileError.INCORRECT_AGE,
  ValidateProfileError.INCORRECT_USER_DATA
];

describe('getProfileErrors', () => {
  test('Получить поле validateErrors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors
      }
    };

    expect(getProfileErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('Получить поле validateErrors если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileErrors(state as StateSchema)).toBe(undefined);
  });
});
