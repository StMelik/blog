import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const sidebarItemsList = useGetSidebarItems();

  const handleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = sidebarItemsList.map((item) => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  ));

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <section
          data-testid='sidebar'
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className]
          )}
        >
          <AppLogo
            size={collapsed ? 30 : 50}
            className={cls.appLogo}
          />
          <VStack
            role='navigation'
            gap='8'
            className={cls.items}
          >
            {itemsList}
          </VStack>
          <Icon
            data-testid='sidebar-toggle'
            onClick={handleCollapsed}
            className={cls.collapseBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} />
          </div>
        </section>
      }
      off={
        <section
          data-testid='sidebar'
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className
          ])}
        >
          <Button
            data-testid='sidebar-toggle'
            onClick={handleCollapsed}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.L}
            square
          >
            {collapsed ? '>' : '<'}
          </Button>

          <VStack
            role='navigation'
            gap='8'
            className={cls.items}
          >
            {itemsList}
          </VStack>

          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} />
          </div>
        </section>
      }
    />
  );
});
