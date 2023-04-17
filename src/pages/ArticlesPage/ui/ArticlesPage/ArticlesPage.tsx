import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { fetchMoreArticlesList } from '../../model/services/fetchMoreArticlesList/fetchMoreArticlesList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducer
} from '../../model/slice/articlesPageSlice';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilter } from '../ArticlesPageFilter';
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

  const [searchParams] = useSearchParams();

  const handleLoadNextPage = useCallback(() => {
    dispatch(fetchMoreArticlesList());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLouder reducers={reducers}>
      <Page
        onScrollEnd={handleLoadNextPage}
        className={classNames(cls.articlesPage, {}, [className])}
        isSaveScroll
      >
        <ArticlesPageFilter />
        <ArticleInfiniteList className={cls.list} />
      </Page>
    </DynamicModuleLouder>
  );
};

export default ArticlesPage;
