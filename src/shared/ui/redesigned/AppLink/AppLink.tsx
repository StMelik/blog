import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkTheme;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames('', { [activeClassName]: isActive }, [
          className,
          cls[variant]
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
