import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'normal',
    ...otherProps
  } = props;

  const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'padding_0',
    '8': 'padding_8',
    '16': 'padding_16',
    '24': 'padding_24'
  };

  const mapBorderToClass: Record<CardBorder, string> = {
    normal: 'border_normal',
    round: 'border_round',
    partial: 'border_partial'
  };

  const paddingClass = mapPaddingToClass[padding];
  const borderClass = mapBorderToClass[border];

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[borderClass]
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
