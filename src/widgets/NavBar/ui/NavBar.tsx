import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.navLinks}>
        <AppLink
          to='/'
          theme={AppLinkTheme.INVERTED}
        >
          Main
        </AppLink>
        <AppLink
          to='/about'
          theme={AppLinkTheme.INVERTED}
        >
          About
        </AppLink>
      </div>
    </div>
  );
};
