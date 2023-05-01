import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

const form = {
  age: 25,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Станислав',
  lastname: 'Мелещик',
  username: 'X44'
};

describe('getProfileForm', () => {
  test('Получить поле form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      }
    };

    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test('Получить поле form если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
