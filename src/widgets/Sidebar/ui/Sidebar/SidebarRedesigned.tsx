import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarRedesignedProps {
  className?: string;
}
// ??????????????
export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

  const sidebarItemsList = useGetSidebarItems();

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
