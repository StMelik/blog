import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'accent' | 'error';
export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 's' | 'm' | 'l';
type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  HeaderTag?: HeaderTagType;
  bold?: boolean;
  'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    HeaderTag = 'h3',
    bold,
    'data-testid': dataTestId = 'Text'
  } = props;

  const additionalClasses = [className, cls[variant], cls[align], cls[size]];

  return (
    <div
      className={classNames(cls.text, { [cls.bold]: bold }, additionalClasses)}
    >
      {title && (
        <HeaderTag
          className={cls.title}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={cls.text}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
        </p>
      )}
    </div>
  );
});
