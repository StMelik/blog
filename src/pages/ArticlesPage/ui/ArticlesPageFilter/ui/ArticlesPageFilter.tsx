import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from '../../../model/selectors/articlesPageSelectors';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilter.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  ArticleSortField, ArticleType, ArticleView
} from '@/entities/Article';
import { articlesPageActions } from '../../../model/slice/articlesPageSlice';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem } from '@/shared/ui/Tabs';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFilterProps {
  className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const handleChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const handleChangeType = useCallback((tab: TabItem) => {
    dispatch(articlesPageActions.setType(tab.value as ArticleType));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

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
