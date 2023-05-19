import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './NavBar.module.scss';
import { getRouteArticleCreate } from '@/shared/constants/router';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

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

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.navBarRedesigned,
    off: () => cls.navBar
  });

  if (authData) {
    return (
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack
              className={cls.actions}
              gap='16'
            >
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.navBar, {}, [className])}>
            <Text
              className={cls.appName}
              title={t('Логотип')}
              theme={TextTheme.INVERTED}
            />

            <AppLink
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.INVERTED}
              className={cls.createBtn}
            >
              {t('Создать статью')}
            </AppLink>

            <HStack
              className={cls.actions}
              gap='16'
            >
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeature
        feature='isAppRedesigned'
        on={
          <Button
            variant='clear'
            onClick={handleShowModal}
          >
            {t('Войти')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={handleShowModal}
          >
            {t('Войти')}
          </ButtonDeprecated>
        }
      />
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={handleCloseModal}
        />
      )}
    </header>
  );
});
