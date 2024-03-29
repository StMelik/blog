import { CommentList } from '@/entities/Coment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/comments';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeature } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const handleSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    return (
      <VStack
        gap='16'
        max
        className={classNames('', {}, [className])}
      >
        <ToggleFeature
          feature='isAppRedesigned'
          on={
            <Text
              size='l'
              title={t('Комментарии')}
            />
          }
          off={
            <TextDeprecated
              size={TextSize.L}
              title={t('Комментарии')}
            />
          }
        />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </VStack>
    );
  }
);
