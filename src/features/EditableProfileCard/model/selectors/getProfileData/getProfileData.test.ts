import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

const data = {
  age: 25,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Станислав',
  lastname: 'Мелещик',
  username: 'X44'
};

describe('getProfileData', () => {
  test('Получить поле data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('Получить поле data если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
