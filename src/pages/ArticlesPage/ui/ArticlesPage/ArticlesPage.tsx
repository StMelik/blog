import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { fetchMoreArticlesList } from '../../model/services/fetchMoreArticlesList/fetchMoreArticlesList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilter } from '../ArticlesPageFilter';
import cls from './ArticlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeature } from '@/shared/lib/features';
import { StickyComponentLayout } from '@/shared/layouts/StickyComponentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const [searchParams] = useSearchParams();

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchMoreArticlesList());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const content = (
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <StickyComponentLayout
          left={<ViewSelectorContainer />}
          content={
            <Page
              data-testid='ArticlesPage'
              onScrollEnd={handleLoadNextPage}
              className={classNames(cls.articlesPageRedesigned, {}, [
                className
              ])}
              isSaveScroll
            >
              <ArticleInfiniteList />
              <ArticlePageGreeting />
            </Page>
          }
          right={<FiltersContainer />}
        />
      }
      off={
        <Page
          data-testid='ArticlesPage'
          onScrollEnd={handleLoadNextPage}
          className={classNames(cls.articlesPage, {}, [className])}
          isSaveScroll
        >
          <ArticlesPageFilter />
          <ArticleInfiniteList className={cls.list} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLouder reducers={reducers}>{content}</DynamicModuleLouder>
  );
};

export default ArticlesPage;
