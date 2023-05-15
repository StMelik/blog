import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions
} from '@/entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';
import { ToggleFeature } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Админка'),
            href: getRouteAdminPanel()
          }
        ]
      : []),
    {
      content: t('Профиль'),
      href: getRouteProfile(authData.id)
    },
    {
      content: t('Выйти'),
      onClick: handleLogout
    }
  ];

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Dropdown
          className={classNames('', {}, [className])}
          trigger={
            <Avatar
              size={48}
              src={authData.avatar}
            />
          }
          direction='bottom left'
          items={items}
        />
      }
      off={
        <DropdownDeprecated
          className={classNames('', {}, [className])}
          trigger={
            <AvatarDeprecated
              size={30}
              src={authData.avatar}
            />
          }
          direction='bottom left'
          items={items}
        />
      }
    />
  );
});
