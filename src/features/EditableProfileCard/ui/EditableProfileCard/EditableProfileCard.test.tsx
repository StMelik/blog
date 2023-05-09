import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { $api } from '@/shared/api/api';

const profile: Profile = {
  age: 25,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'admin',
  lastname: 'admin',
  id: '1',
  username: 'admin123'
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile
    },
    user: {
      authData: {
        id: '1'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
};

describe('features/EditableProfileCard', () => {
  test('Включается режим редактирования', async () => {
    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument();
  });

  test('При отмене значения становятся первоначальными', async () => {
    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));
    await userEvent.clear(screen.getByTestId('ProfileCard.LastNameInput'));

    await userEvent.type(
      screen.getByTestId('ProfileCard.FirstNameInput'),
      'user'
    );
    await userEvent.type(
      screen.getByTestId('ProfileCard.LastNameInput'),
      'user'
    );

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue(
      'user'
    );
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    );

    expect(screen.getByTestId('ProfileCard.FirstNameInput')).toHaveValue(
      'admin'
    );
    expect(screen.getByTestId('ProfileCard.LastNameInput')).toHaveValue(
      'admin'
    );
  });

  test('Появляется ошибка валидации', async () => {
    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.FirstNameInput'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  test('Если не ошибок валидации, то на сервер уходит PUT запрос', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.type(
      screen.getByTestId('ProfileCard.FirstNameInput'),
      'user'
    );

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
