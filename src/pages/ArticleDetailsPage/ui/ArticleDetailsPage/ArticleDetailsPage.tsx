import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Coment';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLouder, ReducersList } from 'shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { useCallback } from 'react';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
  articleDetailsRecommendationsReducer,
  getArticleRecommendations
} from '../../model/slice/articleDetailsRecommendationsSlice';
import {
  getArticleRecommendationsIsLoading
} from '../../model/selectors/recommendations/recommendations';
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const handleSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return <Page className={classNames(cls.articleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>;
  }

  return (
    <DynamicModuleLouder reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />

        <ArticleDetails id={id} />

        <Text
          size={TextSize.L}
          className={cls.recommendationsTitle}
          title={t('Рекомендуем')}
        />
        <ArticleList
          target="_blank"
          className={cls.recommendationsList}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
        />

        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('Комментарии')}
        />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLouder>
  );
};

export default ArticleDetailsPage;
