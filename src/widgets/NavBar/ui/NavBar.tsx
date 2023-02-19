import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navBar, {}, [className])}>
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
  );
};
