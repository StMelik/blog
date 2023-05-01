import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('Возвращает counter state', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 15 }
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 15 });
  });
});
