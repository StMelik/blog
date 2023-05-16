import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated
    });

    const Card = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => CardRedesigned,
      off: () => CardDeprecated
    });

    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view]
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton
                width={30}
                height={30}
                borderRadius='50%'
              />
              <Skeleton
                width={150}
                height={16}
                className={cls.username}
              />
              <Skeleton
                width={150}
                height={16}
                className={cls.date}
              />
            </div>
            <Skeleton
              width={250}
              height={24}
              className={cls.title}
            />
            <Skeleton
              width={200}
              height={16}
              className={cls.types}
            />
            <Skeleton
              width='100%'
              height={200}
              className={cls.img}
            />
            <Skeleton
              width='100%'
              height={250}
              className={cls.textBlock}
            />
            <div className={cls.footer}>
              <Skeleton
                width={200}
                height={36}
              />
              <Skeleton
                width={50}
                height={16}
                className={cls.views}
              />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton
              width={200}
              height={200}
              className={cls.img}
            />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton
              width={130}
              height={16}
              className={cls.types}
            />
            <Skeleton
              width={50}
              height={16}
              className={cls.views}
            />
          </div>
          <Skeleton
            width={150}
            height={16}
            className={cls.title}
          />
        </Card>
      </div>
    );
  }
);
