import { Article, ArticleList, ArticleView } from 'entities/Article';
import { ariclePageActions, ariclePageReducer, getArticles } from '../../model/slice/ariclePageSlice';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLouder, ReducersList } from 'shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import cls from './ArticlesPage.module.scss';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page/Page';
import { fetchMoreArticlesList } from 'pages/ArticlesPage/model/services/fetchMoreArticlesList/fetchMoreArticlesList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: ariclePageReducer
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
    dispatch(ariclePageActions.setView(view));
  }, [dispatch]);

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchMoreArticlesList());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(ariclePageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  });

  return (
    <DynamicModuleLouder reducers={reducers} removeAfterUnmount>
      <Page
        onScrollEnd={handleLoadNextPage}
        className={classNames(cls.articlesPage, {}, [className])}
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
