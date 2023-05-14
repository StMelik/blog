import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme
} from '@/shared/ui/deprecated/AppLink';
import cls from './SidebarItem.module.scss';

import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/Sidebar';
import { ToggleFeature } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.sidebarItemRedesigned, {
            [cls.collapsedRedesigned]: collapsed
          })}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          to={item.path}
          className={classNames(cls.sidebarItem, {
            [cls.collapsed]: collapsed
          })}
          theme={AppLinkTheme.INVERTED}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
