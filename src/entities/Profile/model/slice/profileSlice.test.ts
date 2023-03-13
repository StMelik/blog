import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/ProfileSchema';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';

const data = {
  age: 25,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Станислав',
  lastname: 'Мелещик',
  username: 'X44'
};

describe('profileSlice', () => {
  test('Изменение readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(false)
    )).toEqual({ readonly: false });
  });

  test('Отмена изменений профиля', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      form: { ...data, username: 'Valera228' },
      validateErrors: [
        ValidateProfileError.INCORRECT_USER_DATA
      ]
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      data,
      form: data,
      validateErrors: undefined
    });
  });

  test('Изменение формы профиля', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: data
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: 'Lava', age: 55 })
    )).toEqual({ form: { ...data, username: 'Lava', age: 55 } });
  });

  test('pending обновления профиля', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [
        ValidateProfileError.SERVER_ERROR
      ]
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('fulfilled обновления профиля', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      data,
      form: { ...data, age: 100 },
      validateErrors: [
        ValidateProfileError.SERVER_ERROR
      ]
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    });
  });
});
