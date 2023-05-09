/* eslint-disable i18next/no-literal-string */
import { Button } from '@/shared/ui/Button';
import { FC } from 'react';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = () => {
  const { add, decrement, increment } = useCounterActions();

  const counterValue = useCounterValue();

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <Button
        onClick={handleAddFive}
        data-testid='increment-btn'
      >
        add 5
      </Button>
      <Button
        onClick={handleIncrement}
        data-testid='increment-btn'
      >
        increment
      </Button>
      <Button
        onClick={handleDecrement}
        data-testid='decrement-btn'
      >
        decrement
      </Button>
    </div>
  );
};
