import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * @deprecated
 */
export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    square,
    size = ButtonSize.M,
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.squaer]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth
  };

  return (
    <button
      type='button'
      className={classNames(cls.button, mods, [
        className,
        cls[theme],
        cls[size]
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
