import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeature } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onTabClick: (type: TabItem) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onTabClick } = props;

  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t('Все статьи')
      },
      {
        value: ArticleType.IT,
        content: t('Айти')
      },
      {
        value: ArticleType.ECONOMICS,
        content: t('Экономика')
      },
      {
        value: ArticleType.SCIENCE,
        content: t('Наука')
      }
    ],
    [t]
  );

  return (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Tabs
          className={classNames('', {}, [className])}
          tabs={typeTabs}
          onTabClick={onTabClick}
          value={value}
          direction='column'
        />
      }
      off={
        <TabsDeprecated
          className={classNames('', {}, [className])}
          tabs={typeTabs}
          onTabClick={onTabClick}
          value={value}
        />
      }
    />
  );
});
