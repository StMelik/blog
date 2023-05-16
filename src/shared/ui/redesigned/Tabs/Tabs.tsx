import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, direction = 'row', onTabClick } = props;

  const { t } = useTranslation();

  const handleClick = useCallback(
    (tab: TabItem) => () => onTabClick(tab),
    [onTabClick]
  );

  return (
    <Flex
      direction={direction}
      gap='8'
      className={classNames(cls.tabs, {}, [className])}
      align='start'
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;

        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            key={tab.value}
            className={cls.tab}
            onClick={handleClick(tab)}
            border='round'
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
