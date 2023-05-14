import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('Тест рендер', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Тест clear тема', () => {
    render(<Button variant='clear'>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
