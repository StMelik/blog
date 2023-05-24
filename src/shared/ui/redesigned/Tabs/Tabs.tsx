import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  /**
   * Элементы
   */
  tabs: TabItem[];
  /**
   * Выбранный элемент
   */
  value: string;
  /**
   * Вызывается при клике на элемент
   */
  onTabClick: (tab: TabItem) => void;
  /**
   * Направление элементов
   */
  direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, direction = 'row', onTabClick } = props;

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
