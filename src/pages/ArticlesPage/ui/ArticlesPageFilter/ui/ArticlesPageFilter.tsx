import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../../lib/hooks/useArticleFilters';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPageFilter.module.scss';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const {
    view,
    order,
    sort,
    search,
    type,
    handleChangeView,
    handleChangeSort,
    handleChangeOrder,
    handleChangeSearch,
    handleChangeType
  } = useArticleFilters();

  return (
    <div className={classNames(cls.articlesPageFilter, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={handleChangeView}
        />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={handleChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs
        className={cls.tabs}
        value={type}
        onTabClick={handleChangeType}
      />
    </div>
  );
});
