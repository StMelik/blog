import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './SidebarItem.module.scss';

import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/Sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.sidebarItem, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.INVERTED}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
