import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails';

describe('getArticleDetails', () => {
  test('Получить поле data', () => {
    const data = {
      id: '1',
      title: 'title'
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data
      }
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('Получить поле data если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {}
    };

    expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
  });

  test('Получить поле isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });

  test('Получить поле isLoading если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {}
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });

  test('Получить поле error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('Получить поле error если стейт пустой', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {}
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('');
  });
});
