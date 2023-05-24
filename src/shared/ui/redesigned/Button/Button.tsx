import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonVariant = 'clear' | 'outline' | 'filled';
type ButtonColor = 'normal' | 'success' | 'error';
type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Вариант отображения кнопки
   */
  variant?: ButtonVariant;
  /**
   * Цвет кнопки
   */
  color?: ButtonColor;
  /**
   * Размер кнопки
   */
  size?: ButtonSize;
  /**
   * Заблокировать кнопку
   */
  disabled?: boolean;
  /**
   * Растянуть кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
  /**
   * Дополнение слева от надписи
   */
  addonLeft?: ReactNode;
  /**
   * Дополнение справа от надписи
   */
  addonRight?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    variant = 'outline',
    color = 'normal',
    children,
    size = 'm',
    disabled,
    fullWidth,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight)
  };

  return (
    <button
      type='button'
      disabled={disabled}
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
