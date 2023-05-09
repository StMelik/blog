import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const sidebarItemsList = useSelector(getSidebarItems);

  const handleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
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
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </VStack>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </section>
  );
});
