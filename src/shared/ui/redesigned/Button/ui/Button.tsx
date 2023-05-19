import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';
type ButtonColor = 'normal' | 'success' | 'error';
type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    variant = 'outline',
    color = 'normal',
    children,
    square,
    size = 'm',
    disabled,
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight)
  };

  return (
    <button
      type='button'
      className={classNames(cls.button, mods, [
        className,
        cls[variant],
        cls[size],
        cls[color]
      ])}
      {...otherProps}
    >
      {Boolean(addonLeft) && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {Boolean(addonRight) && (
        <div className={cls.addonRight}>{addonRight}</div>
      )}
    </button>
  );
});
