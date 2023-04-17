import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
  age: 25,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Станислав',
  lastname: 'Мелещик',
  username: 'X44'
};

describe('validateProfileData', () => {
  test('Успешная валидация', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('Пустой first и last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ]);
  });

  test('Некорректный возраст', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ]);
  });

  test('Некорректная страна', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });

  test('Некорректные все поля', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});
