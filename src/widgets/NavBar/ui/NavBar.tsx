import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <div className={cls.navLinks}>
        <AppLink
          to='/'
          theme={AppLinkTheme.INVERTED}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          to='/about'
          theme={AppLinkTheme.INVERTED}
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
