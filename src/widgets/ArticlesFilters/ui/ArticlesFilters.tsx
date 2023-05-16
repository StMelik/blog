import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { SortOrder } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { getVStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
  className?: string;
  search: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  type: ArticleType;
  onTabClick: (type: TabItem) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    search,
    sort,
    order,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    type,
    onTabClick
  } = props;

  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.articlesFilters, {}, [
        className,
        getVStack({ gap: '32' })
      ])}
      padding='24'
    >
      <Input
        onChange={onChangeSearch}
        value={search}
        size='s'
        placeholder={t('Поиск')}
        addonLeft={<Icon Svg={SearchIcon} />}
      />

      <ArticleTypeTabs
        className={cls.tabs}
        value={type}
        onTabClick={onTabClick}
      />

      <ArticleSortSelector
        order={order}
        sort={sort}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
      />
    </Card>
  );
});
