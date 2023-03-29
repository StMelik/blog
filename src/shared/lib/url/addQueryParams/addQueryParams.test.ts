import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('Тест с одним параметром', () => {
    const params = getQueryParams({
      test: 'value'
    });

    expect(params).toBe('?test=value');
  });

  test('Тест с несколькими параметрами', () => {
    const params = getQueryParams({
      test: 'value',
      user: 'sasha'
    });

    expect(params).toBe('?test=value&user=sasha');
  });

  test('Тест с undefined', () => {
    const params = getQueryParams({
      test: 'value',
      user: undefined
    });

    expect(params).toBe('?test=value');
  });
});
