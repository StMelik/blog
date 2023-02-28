import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Тест рендер', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 15 } }
    });

    expect(screen.getByTestId('value-title')).toHaveTextContent('15');
  });

  test('Тест нажатие на increment кнопку', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 15 } }
    });

    fireEvent.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('16');
  });

  test('Тест нажатие на decrement кнопку', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 15 } }
    });

    fireEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('14');
  });
});
