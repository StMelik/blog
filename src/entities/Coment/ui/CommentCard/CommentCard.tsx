import { getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo } from 'react';
import { Comment } from '../../model/types/Comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  });

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
    <ToggleFeature
      feature='isAppRedesigned'
      on={
        <Card
          padding='24'
          border='round'
          max
        >
          <VStack
            data-testid='CommentCard.Content'
            gap='4'
            max
            className={classNames(cls.commentCardRedesigned, {}, [className])}
          >
            <AppLink to={getRouteProfile(comment?.user.id)}>
              {comment?.user.avatar && (
                <Avatar
                  size={30}
                  src={comment?.user.avatar}
                  username={comment?.user.username}
                />
              )}
            </AppLink>
            <Text text={comment?.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid='CommentCard.Content'
          gap='4'
          max
          className={classNames(cls.commentCard, {}, [className])}
        >
          <AppLinkDeprecated
            to={getRouteProfile(comment?.user.id)}
            className={cls.header}
          >
            {comment?.user.avatar && (
              <AvatarDeprecated
                size={30}
                src={comment?.user.avatar}
              />
            )}
            <TextDeprecated
              className={cls.username}
              title={comment?.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated text={comment?.text} />
        </VStack>
      }
    />
  );
});
