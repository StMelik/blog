import { Comment } from '../../model/types/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard className={cls.comment} comment={comment} isLoading={isLoading} />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});
