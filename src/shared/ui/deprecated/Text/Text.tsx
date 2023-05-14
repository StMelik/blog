import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  HeaderTag?: HeaderTagType;
  'data-testid'?: string;
}

/**
 * @deprecated
 */
export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    HeaderTag = 'h3',
    'data-testid': dataTestId = 'Text'
  } = props;

  return (
    <div
      className={classNames(cls.text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size]
      ])}
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
