import { ArticleView } from '../../model/consts/articleConsts';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view
  } = props;

  const { t } = useTranslation();

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton width={200} height={16} className={cls.types} />
          <Skeleton width="100%" height={200} className={cls.img} />
          <Skeleton width="100%" height={250} className={cls.textBlock} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
            <Skeleton width={50} height={16} className={cls.views} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} className={cls.types} />
          <Skeleton width={50} height={16} className={cls.views} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  );
});
