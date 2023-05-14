import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    variant = 'outline',
    children,
    square,
    size = 'm',
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth
  };

  return (
    <button
      type='button'
      className={classNames(cls.button, mods, [
        className,
        cls[variant],
        cls[size]
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
