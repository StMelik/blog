import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string | null;
  text?: string | null;
  theme?: TextTheme
}

export const Text: FC<TextProps> = memo(({
  className, title, text, theme = TextTheme.PRIMARY
}) => (
  <div className={classNames(cls.text, {}, [className, cls[theme]])}>
    {title && <p className={cls.title}>{title}</p>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
));