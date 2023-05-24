import { render, screen } from '@testing-library/react';
import { Button } from './Button';

const textButton = 'Кнопка';

describe('Button', () => {
  test('Primary тема', () => {
    render(<Button>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('outline');
    expect(screen.getByText(textButton)).toHaveClass('normal');
    expect(screen.getByText(textButton)).toHaveClass('m');
  });

  test('L размер', () => {
    render(<Button size='l'>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('outline');
    expect(screen.getByText(textButton)).toHaveClass('normal');
    expect(screen.getByText(textButton)).toHaveClass('l');
  });

  test('XL размер', () => {
    render(<Button size='xl'>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('outline');
    expect(screen.getByText(textButton)).toHaveClass('normal');
    expect(screen.getByText(textButton)).toHaveClass('xl');
  });

  test('Clear тема', () => {
    render(<Button variant='clear'>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('clear');
    expect(screen.getByText(textButton)).toHaveClass('normal');
    expect(screen.getByText(textButton)).toHaveClass('m');
  });

  test('Filled тема', () => {
    render(<Button variant='filled'>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('filled');
    expect(screen.getByText(textButton)).toHaveClass('normal');
    expect(screen.getByText(textButton)).toHaveClass('m');
  });

  test('Success цвет', () => {
    render(<Button color='success'>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('outline');
    expect(screen.getByText(textButton)).toHaveClass('success');
    expect(screen.getByText(textButton)).toHaveClass('m');
  });

  test('Error цвет', () => {
    render(<Button color='error'>{textButton}</Button>);
    expect(screen.getByText(textButton)).toBeInTheDocument();
    expect(screen.getByText(textButton)).toHaveClass('outline');
    expect(screen.getByText(textButton)).toHaveClass('error');
    expect(screen.getByText(textButton)).toHaveClass('m');
  });
});
