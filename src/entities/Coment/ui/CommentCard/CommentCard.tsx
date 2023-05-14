import { Comment } from '../../model/types/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { getRouteProfile } from '@/shared/constants/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
        data-testid='CommentCard.Loading'
        className={classNames(cls.commentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton
            width={30}
            height={30}
            borderRadius='50%'
          />
          <Skeleton
            width={100}
            height={16}
            className={cls.username}
          />
        </div>
        <Skeleton
          width='100%'
          height={50}
        />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      data-testid='CommentCard.Content'
      gap='4'
      max
      className={classNames(cls.commentCard, {}, [className])}
    >
      <AppLink
        to={getRouteProfile(comment?.user.id)}
        className={cls.header}
      >
        {comment?.user.avatar && (
          <Avatar
            size={30}
            src={comment?.user.avatar}
          />
        )}
        <Text
          className={cls.username}
          title={comment?.user.username}
        />
      </AppLink>
      <Text text={comment?.text} />
    </VStack>
  );
});
