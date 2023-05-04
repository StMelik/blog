import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import {
  FC, memo, useCallback, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import cls from './NavBar.module.scss';
import { RoutePath } from '@/shared/constants/router';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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

        <HStack
          className={cls.actions}
          gap="16"
        >
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
