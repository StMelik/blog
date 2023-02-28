import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('Возвращает counter state value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 15 }
    };

    expect(getCounterValue(state as StateSchema)).toEqual(15);
  });
});
