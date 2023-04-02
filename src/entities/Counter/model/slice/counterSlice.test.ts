import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 15
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 14 });
  });

  test('increment', () => {
    const state: CounterSchema = {
      value: 15
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 16 });
  });

  test('Проверка роботоспособности при пустом state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
