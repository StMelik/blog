import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import {
  FC, memo, useCallback, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  /* eslint-disable i18next/no-literal-string */

  if (authData) {
    return (
      <header className={classNames(cls.navBar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Логотип')}
          theme={TextTheme.INVERTED}
        />

        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.INVERTED}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>

        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogout}
          className={cls.authBtn}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navBar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={handleShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={handleCloseModal}
        />
      )}
    </header>
  );
});
