import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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
  size?: ButtonSize
  disabled?: boolean
}

export const Button: FC<ButtonProps> = memo(({
  className, theme, children, square, size = ButtonSize.M, disabled, ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.squaer]: square,
    [cls.disabled]: disabled
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
