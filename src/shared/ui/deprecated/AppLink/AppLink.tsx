import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  BLUE = 'blue'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

/**
 * @deprecated
 */
export const AppLink: FC<AppLinkProps> = memo(
  ({ className, children, theme = AppLinkTheme.PRIMARY, ...otherProps }) => (
    <Link
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
);
