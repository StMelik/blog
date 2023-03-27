import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';

import { ArticleList, ArticleView } from 'entities/Article';

import { ArticleViewSelector } from 'features/ArticleViewSelector';

import { fetchMoreArticlesList } from '../../model/services/fetchMoreArticlesList/fetchMoreArticlesList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles
} from '../../model/slice/articlesPageSlice';

import cls from './ArticlesPage.module.scss';

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

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchMoreArticlesList());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLouder reducers={reducers}>
      <Page
        onScrollEnd={handleLoadNextPage}
        className={classNames(cls.articlesPage, {}, [className])}
        isSaveScroll
      >
        <ArticleViewSelector view={view} onViewClick={handleChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLouder>
  );
};

export default ArticlesPage;
